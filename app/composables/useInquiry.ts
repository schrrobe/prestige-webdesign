/**
 * Gemeinsame Versandlogik für Kurz- und Kontaktformular.
 *
 * Mit Web3Forms-Key wird direkt verschickt. Ohne Key öffnet sich das
 * E-Mail-Programm – dann melden wir ehrlich „bitte dort absenden“ statt
 * eines falschen „Danke, ist angekommen“.
 */
import { CONTACT } from '~/data/site'

export type InquiryStatus = 'idle' | 'submitting' | 'sent' | 'mailto' | 'error'

export interface InquiryPayload {
  name?: string
  email: string
  topic?: string
  message?: string
  source: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateEmail(value: string): string {
  const v = value.trim()
  if (!v) return 'Bitte geben Sie Ihre E-Mail-Adresse an, damit ich antworten kann.'
  if (!EMAIL_RE.test(v)) return 'Diese E-Mail-Adresse sieht unvollständig aus – zum Beispiel name@firma.de.'
  return ''
}

export function useInquiry() {
  const config = useRuntimeConfig()
  const accessKey = (config.public.web3formsKey as string) || ''
  const status = ref<InquiryStatus>('idle')

  async function send(payload: InquiryPayload, botcheck = '') {
    if (botcheck) return // Honeypot ausgefüllt -> still verwerfen
    status.value = 'submitting'

    const topic = payload.topic || 'Allgemein'
    const subject = `Anfrage (${topic}) über prestige-webdesign.de`

    try {
      if (accessKey) {
        const res = await $fetch<{ success: boolean }>('https://api.web3forms.com/submit', {
          method: 'POST',
          body: {
            access_key: accessKey,
            subject,
            from_name: 'Prestige Webdesign Website',
            name: payload.name || '—',
            email: payload.email.trim(),
            thema: topic,
            nachricht: payload.message || '—',
            quelle: payload.source,
          },
        })
        if (!res?.success) throw new Error('submit failed')
        status.value = 'sent'
      } else {
        const body = [
          payload.name ? `Name: ${payload.name}` : '',
          `E-Mail: ${payload.email}`,
          `Thema: ${topic}`,
          '',
          payload.message || '',
        ].filter((line, i) => line || i > 2).join('\n')
        window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        status.value = 'mailto'
      }
    } catch {
      status.value = 'error'
    }
  }

  function reset() {
    status.value = 'idle'
  }

  return { status, send, reset }
}
