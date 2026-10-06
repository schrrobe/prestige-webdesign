/**
 * Einwilligung für Google Analytics 4 (Consent Mode v2, echtes Opt-in).
 *
 * Ohne Messungs-ID gibt es nichts, wofür man einwilligen müsste: dann wird
 * weder GA geladen noch ein Banner gezeigt. Mit ID lädt GA erst nach „Zustimmen“.
 */
export type ConsentState = 'unknown' | 'granted' | 'denied'

const STORAGE_KEY = 'pw-consent-analytics'

export function useConsent() {
  const config = useRuntimeConfig()
  const measurementId = (config.public.gaMeasurementId as string) || ''
  const state = useState<ConsentState>('pw-consent', () => 'unknown')
  const bannerOpen = useState<boolean>('pw-consent-open', () => false)

  function read() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      state.value = saved === 'granted' || saved === 'denied' ? saved : 'unknown'
    } catch {
      state.value = 'unknown'
    }
    bannerOpen.value = !!measurementId && state.value === 'unknown'
  }

  function decide(next: 'granted' | 'denied') {
    state.value = next
    bannerOpen.value = false
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Entscheidung gilt dann nur für diese Sitzung
    }
  }

  function reopen() {
    if (measurementId) bannerOpen.value = true
  }

  return { measurementId, state, bannerOpen, read, decide, reopen }
}
