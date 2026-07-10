<script setup lang="ts">
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeDropdown = ref<string | null>(null)
const route = useRoute()

const mobileNav = ref<HTMLElement | null>(null)
const menuButton = ref<HTMLElement | null>(null)

const navItems = [
  { label: 'Startseite', to: '/' },
  {
    label: 'Leistungen',
    to: '/leistungen',
    children: [
      { label: 'Webdesign', to: '/leistungen/webdesign' },
      { label: 'Webanwendungen', to: '/leistungen/webanwendungen' },
      { label: 'SEO', to: '/leistungen/seo' },
      { label: 'E-Commerce', to: '/leistungen/e-commerce' },
      { label: 'Wartung & Support', to: '/leistungen/wartung' },
    ],
  },
  { label: 'Kontakt', to: '/kontakt' },
]

function setMobileMenuState(nextState: boolean) {
  isMobileMenuOpen.value = nextState
}

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (import.meta.client) document.documentElement.style.overflow = ''
})

// Body-Scroll sperren + Fokus ins Menü, solange das Mobile-Menü offen ist
watch(isMobileMenuOpen, async (open) => {
  if (!import.meta.client) return
  document.documentElement.style.overflow = open ? 'hidden' : ''
  if (open) {
    await nextTick()
    mobileNav.value?.querySelector<HTMLElement>('a[href], button')?.focus()
  }
})

// Fokus-Trap + Escape im Mobile-Menü
function onMenuKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    setMobileMenuState(false)
    menuButton.value?.focus()
    return
  }
  if (e.key !== 'Tab' || !mobileNav.value) return
  const focusables = Array.from(
    mobileNav.value.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
  )
  if (!focusables.length) return
  const first = focusables[0]
  const last = focusables[focusables.length - 1]
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault()
    last.focus()
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault()
    first.focus()
  }
}

watch(route, () => {
  setMobileMenuState(false)
  activeDropdown.value = null
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
    :class="isScrolled || isMobileMenuOpen ? 'bg-dark-900/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent border-b border-transparent'"
  >
    <div class="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3 group rounded-lg">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center font-display font-bold text-lg text-white group-hover:shadow-lg group-hover:shadow-primary-500/30 transition-all duration-300">
            P
          </div>
          <div class="leading-none">
            <span class="text-lg font-bold text-white tracking-tight">Prestige</span>
            <span class="text-lg font-light text-primary-300 ml-1">Webdesign</span>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-1" aria-label="Hauptnavigation">
          <div
            v-for="item in navItems"
            :key="item.label"
            class="relative group"
            @mouseenter="activeDropdown = item.children ? item.label : null"
            @mouseleave="activeDropdown = null"
          >
            <NuxtLink
              v-if="!item.children"
              :to="item.to"
              class="px-4 py-2 text-sm font-medium text-dark-100 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
              active-class="!text-primary-300"
            >
              {{ item.label }}
            </NuxtLink>
            <template v-else>
              <button
                :id="`nav-trigger-${item.label}`"
                type="button"
                class="px-4 py-2 text-sm font-medium text-dark-100 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5 flex items-center gap-1.5"
                :aria-expanded="activeDropdown === item.label"
                :aria-controls="`nav-submenu-${item.label}`"
                aria-haspopup="true"
                @focus="activeDropdown = item.label"
                @click="activeDropdown = activeDropdown === item.label ? null : item.label"
                @keydown.esc="activeDropdown = null"
              >
                {{ item.label }}
                <AppIcon
                  name="chevron-down"
                  class="w-4 h-4 transition-transform duration-300"
                  :class="{ 'rotate-180': activeDropdown === item.label }"
                />
              </button>
              <!-- Dropdown -->
              <div
                :id="`nav-submenu-${item.label}`"
                class="absolute top-full left-0 pt-2 transition-all duration-200 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0"
                :class="activeDropdown === item.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-1'"
              >
                <ul class="glass-card p-2 min-w-[240px] shadow-2xl shadow-black/40" :aria-labelledby="`nav-trigger-${item.label}`">
                  <li v-for="child in item.children" :key="child.label">
                    <NuxtLink
                      :to="child.to"
                      class="block px-4 py-2.5 text-sm text-dark-100 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
                      active-class="!text-primary-300 bg-primary-500/10"
                      @click="activeDropdown = null"
                    >
                      {{ child.label }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </template>
          </div>
        </nav>

        <!-- CTA + Mobile Toggle -->
        <div class="flex items-center gap-3">
          <NuxtLink to="/kontakt" class="hidden md:inline-flex btn-primary !px-5 !py-2.5 text-sm">
            Kostenlose Beratung
          </NuxtLink>
          <button
            ref="menuButton"
            type="button"
            class="lg:hidden text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-controls="mobile-navigation"
            :aria-expanded="isMobileMenuOpen"
            :aria-label="isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'"
            @click="setMobileMenuState(!isMobileMenuOpen)"
          >
            <AppIcon :name="isMobileMenuOpen ? 'close' : 'menu'" class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <nav
        v-if="isMobileMenuOpen"
        id="mobile-navigation"
        ref="mobileNav"
        class="lg:hidden bg-dark-900/95 backdrop-blur-xl border-t border-white/10 max-h-[calc(100vh-5rem)] overflow-y-auto"
        aria-label="Mobile Navigation"
        @keydown="onMenuKeydown"
      >
        <div class="px-4 py-6 space-y-1">
          <template v-for="item in navItems" :key="item.label">
            <NuxtLink
              v-if="!item.children"
              :to="item.to"
              class="block px-4 py-3 text-base text-dark-100 hover:text-white hover:bg-white/5 rounded-lg"
              active-class="!text-primary-300"
              @click="setMobileMenuState(false)"
            >
              {{ item.label }}
            </NuxtLink>
            <template v-else>
              <NuxtLink
                :to="item.to"
                class="block px-4 py-3 text-base text-dark-100 hover:text-white hover:bg-white/5 rounded-lg"
                active-class="!text-primary-300"
                @click="setMobileMenuState(false)"
              >
                {{ item.label }}
              </NuxtLink>
              <NuxtLink
                v-for="child in item.children"
                :key="child.label"
                :to="child.to"
                class="block px-8 py-2.5 text-sm text-dark-200 hover:text-white hover:bg-white/5 rounded-lg"
                active-class="!text-primary-300"
                @click="setMobileMenuState(false)"
              >
                {{ child.label }}
              </NuxtLink>
            </template>
          </template>
          <div class="pt-4">
            <NuxtLink to="/kontakt" class="btn-primary w-full text-center" @click="setMobileMenuState(false)">
              Kostenlose Beratung
            </NuxtLink>
          </div>
        </div>
      </nav>
    </Transition>
  </header>
</template>
