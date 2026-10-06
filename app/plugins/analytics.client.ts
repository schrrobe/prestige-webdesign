/**
 * Lädt gtag.js ausschließlich nach Einwilligung. Consent Mode v2 wird
 * vorab auf „denied“ gesetzt und erst mit der Zustimmung freigegeben;
 * ein späterer Widerruf setzt die Signale wieder auf „denied“.
 */
declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export default defineNuxtPlugin(() => {
  const { measurementId, state, read } = useConsent()
  if (!measurementId) return

  let loaded = false

  function ensureGtag() {
    window.dataLayer = window.dataLayer || []
    window.gtag = window.gtag || function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments)
    }
  }

  function load() {
    if (loaded) return
    loaded = true
    ensureGtag()
    window.gtag!('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
    })
    window.gtag!('consent', 'update', { analytics_storage: 'granted' })
    window.gtag!('js', new Date())
    window.gtag!('config', measurementId)
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`
    document.head.appendChild(script)
  }

  read()
  if (state.value === 'granted') load()

  function clearGaCookies() {
    const root = location.hostname.replace(/^www\./, '')
    for (const name of document.cookie.split(';').map(c => c.split('=')[0]!.trim())) {
      if (name === '_ga' || name.startsWith('_ga_')) {
        document.cookie = `${name}=; Max-Age=0; path=/`
        document.cookie = `${name}=; Max-Age=0; path=/; domain=.${root}`
      }
    }
  }

  watch(state, (next) => {
    if (next === 'granted') {
      if (loaded) {
        window.gtag?.('consent', 'update', { analytics_storage: 'granted' })
      } else {
        load()
      }
    }
    else if (next === 'denied' && loaded) {
      clearGaCookies()
      window.location.reload()
    }
  })
})
