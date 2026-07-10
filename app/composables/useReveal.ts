/**
 * Scroll-Reveal auf Basis von IntersectionObserver.
 *
 * Robustheit: `revealed` startet auf `true`, damit statisch gerenderte Seiten,
 * Crawler und Nutzer ohne JS den Inhalt IMMER sehen. Erst auf dem Client wird –
 * sofern keine Bewegungsreduktion gewünscht ist und das Element unterhalb des
 * Folds liegt – kurz versteckt und beim Hereinscrollen sanft eingeblendet.
 */
export function useReveal() {
  const el = ref<HTMLElement | null>(null)
  const revealed = ref(true)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window) || !el.value) return

    const rect = el.value.getBoundingClientRect()
    const inView = rect.top < window.innerHeight && rect.bottom > 0
    if (inView) return // bereits sichtbar -> keine Animation, bleibt sichtbar

    revealed.value = false
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            revealed.value = true
            observer?.disconnect()
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el.value)
  })

  onBeforeUnmount(() => observer?.disconnect())

  return { el, revealed }
}
