/**
 * Farbschema: „system“ folgt dem Gerät (dunkel bei Dunkelmodus),
 * „light“/„dark“ überschreiben es. Das Boot-Skript in nuxt.config setzt
 * data-theme vor dem ersten Paint; hier wird nur gelesen und umgeschaltet.
 */
export type ThemeChoice = 'system' | 'light' | 'dark'

const STORAGE_KEY = 'pw-theme'

export function useTheme() {
  const choice = useState<ThemeChoice>('pw-theme', () => 'system')

  onMounted(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === 'light' || saved === 'dark') choice.value = saved
    } catch {
      // Speicher gesperrt (Privatmodus) – System-Einstellung bleibt
    }
  })

  function setTheme(next: ThemeChoice) {
    choice.value = next
    const root = document.documentElement
    if (next === 'system') delete root.dataset.theme
    else root.dataset.theme = next
    try {
      if (next === 'system') localStorage.removeItem(STORAGE_KEY)
      else localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignorieren – Auswahl gilt dann nur für diese Sitzung
    }
  }

  return { choice, setTheme }
}
