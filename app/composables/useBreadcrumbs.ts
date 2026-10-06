/**
 * Brotkrumen aus dem Pfad – sichtbar im Seitenkopf und als BreadcrumbList (JSON-LD).
 */
export interface Crumb {
  name: string
  path: string
}

const SEGMENT_NAMES: Record<string, string> = {
  leistungen: 'Leistungen',
  webdesign: 'Webdesign',
  seo: 'SEO',
  'e-commerce': 'Online-Shops',
  wartung: 'Wartung & Support',
  webanwendungen: 'Webanwendungen',
  kontakt: 'Kontakt',
  referenzen: 'Referenzen',
  preise: 'Preise',
  'ueber-mich': 'Über mich',
  impressum: 'Impressum',
  datenschutz: 'Datenschutz',
  'shape-and-flow': 'Shape & Flow',
  '13th-passion': '13th Passion',
  'holtstraeter-transporte': 'Holtsträter Transporte',
  'webdesign-dortmund': 'Webdesign Dortmund',
  'webdesign-essen': 'Webdesign Essen',
  'webdesign-bochum': 'Webdesign Bochum',
  'webdesign-bottrop': 'Webdesign Bottrop',
  'webdesign-unna': 'Webdesign Unna',
  dortmund: 'Dortmund',
  essen: 'Essen',
  bochum: 'Bochum',
  bottrop: 'Bottrop',
}

const CITY_SEGMENTS = new Set(['dortmund', 'essen', 'bochum', 'bottrop'])

function humanize(segment: string) {
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace(/\bFuer\b/g, 'für')
    .replace(/\bUeber\b/g, 'über')
}

export function useBreadcrumbs() {
  const route = useRoute()
  return computed<Crumb[]>(() => {
    const segments = route.path.split('/').filter(Boolean)
    if (!segments.length) return []
    const crumbs: Crumb[] = [{ name: 'Startseite', path: '/' }]
    let path = ''
    segments.forEach((seg, i) => {
      path += `/${seg}`
      // /dortmund/<keyword>: Es gibt keine Seite /dortmund – die Stadtseite heißt /webdesign-dortmund
      if (i === 0 && segments.length > 1 && CITY_SEGMENTS.has(seg)) {
        crumbs.push({ name: SEGMENT_NAMES[`webdesign-${seg}`] ?? humanize(seg), path: `/webdesign-${seg}` })
        return
      }
      crumbs.push({ name: SEGMENT_NAMES[seg] ?? humanize(seg), path })
    })
    return crumbs
  })
}
