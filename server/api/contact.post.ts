import nodemailer from 'nodemailer'

type ContactFormBody = {
  name?: string
  email?: string
  phone?: string
  company?: string
  service?: string
  message?: string
  website?: string
}

function sanitizeValue(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const body = await readBody<ContactFormBody>(event)

  const payload = {
    name: sanitizeValue(body.name),
    email: sanitizeValue(body.email),
    phone: sanitizeValue(body.phone),
    company: sanitizeValue(body.company),
    service: sanitizeValue(body.service),
    message: sanitizeValue(body.message),
    website: sanitizeValue(body.website),
  }

  if (payload.website) {
    return { ok: true }
  }

  if (!payload.name || !payload.email || !payload.message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bitte fuellen Sie Name, E-Mail und Nachricht aus.',
    })
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(payload.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bitte geben Sie eine gueltige E-Mail-Adresse ein.',
    })
  }

  if (!config.smtpHost || !config.smtpPort || !config.smtpUser || !config.smtpPass) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Der Mailversand ist noch nicht konfiguriert.',
    })
  }

  const transport = nodemailer.createTransport({
    host: config.smtpHost,
    port: Number(config.smtpPort),
    secure: Number(config.smtpPort) === 465,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass,
    },
  })

  const serviceLabelMap: Record<string, string> = {
    webdesign: 'Webdesign',
    seo: 'SEO / Suchmaschinenoptimierung',
    ecommerce: 'E-Commerce / Online-Shop',
    wartung: 'Wartung & Support',
    sonstiges: 'Sonstiges',
  }

  const serviceLabel = serviceLabelMap[payload.service] || 'Nicht angegeben'
  const mailTo = config.mailTo || 'info@prestige-webdesign.de'
  const mailFrom = config.mailFrom || config.smtpUser

  try {
    await transport.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: payload.email,
      subject: `Neue Kontaktanfrage von ${payload.name}`,
      text: [
        'Neue Kontaktanfrage ueber prestige-webdesign.de',
        '',
        `Name: ${payload.name}`,
        `E-Mail: ${payload.email}`,
        `Telefon: ${payload.phone || 'Nicht angegeben'}`,
        `Unternehmen: ${payload.company || 'Nicht angegeben'}`,
        `Leistung: ${serviceLabel}`,
        '',
        'Nachricht:',
        payload.message,
      ].join('\n'),
      html: `
        <h1>Neue Kontaktanfrage</h1>
        <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
        <p><strong>E-Mail:</strong> ${escapeHtml(payload.email)}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(payload.phone || 'Nicht angegeben')}</p>
        <p><strong>Unternehmen:</strong> ${escapeHtml(payload.company || 'Nicht angegeben')}</p>
        <p><strong>Leistung:</strong> ${escapeHtml(serviceLabel)}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${escapeHtml(payload.message).replaceAll('\n', '<br />')}</p>
      `,
    })
  }
  catch {
    throw createError({
      statusCode: 500,
      statusMessage: 'Der Mailversand ist fehlgeschlagen.',
    })
  }

  return { ok: true }
})
