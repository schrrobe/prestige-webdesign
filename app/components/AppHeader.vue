<script setup lang="ts">
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeDropdown = ref<string | null>(null)
const route = useRoute()

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

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

watch(route, () => {
  setMobileMenuState(false)
  activeDropdown.value = null
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="isScrolled ? 'bg-dark-900/90 backdrop-blur-xl shadow-2xl shadow-black/20 border-b border-white/5' : 'bg-transparent'"
  >
    <div class="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center font-display font-bold text-lg text-white group-hover:shadow-lg group-hover:shadow-primary-500/30 transition-all duration-300">
            P
          </div>
          <div>
            <span class="text-lg font-bold text-white tracking-tight">Prestige</span>
            <span class="text-lg font-light text-primary-400 ml-1">Webdesign</span>
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
              v-if="item.to && !item.children"
              :to="item.to"
              class="px-4 py-2 text-sm font-medium text-dark-100 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
              active-class="text-primary-400"
            >
              {{ item.label }}
            </NuxtLink>
            <button
              v-else
              type="button"
              class="px-4 py-2 text-sm font-medium text-dark-100 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5 flex items-center gap-1"
              :aria-expanded="activeDropdown === item.label"
              :aria-controls="`nav-submenu-${item.label}`"
              :id="`nav-trigger-${item.label}`"
              aria-haspopup="true"
              @focus="activeDropdown = item.label"
              @click="activeDropdown = activeDropdown === item.label ? null : item.label"
              @keydown.esc="activeDropdown = null"
            >
              {{ item.label }}
              <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <!-- Dropdown -->
            <div
              v-if="item.children"
              :id="`nav-submenu-${item.label}`"
              class="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 group-focus-within:translate-y-0"
              :class="activeDropdown === item.label ? 'opacity-100 visible translate-y-0' : ''"
            >
              <div class="glass-card p-2 min-w-[220px] shadow-2xl shadow-black/30" role="menu" :aria-labelledby="`nav-trigger-${item.label}`">
                <NuxtLink
                  v-for="child in item.children"
                  :key="child.label"
                  :to="child.to"
                  class="block px-4 py-3 text-sm text-dark-100 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
                  active-class="text-primary-400 bg-primary-500/10"
                  role="menuitem"
                  @click="activeDropdown = null"
                >
                  {{ child.label }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </nav>

        <!-- CTA + Mobile Toggle -->
        <div class="flex items-center gap-4">
          <NuxtLink to="/kontakt" class="hidden md:inline-flex btn-primary !px-6 !py-2.5 text-sm">
            Kostenlose Beratung
          </NuxtLink>
          <button
            type="button"
            class="lg:hidden text-white p-2"
            aria-controls="mobile-navigation"
            :aria-expanded="isMobileMenuOpen"
            :aria-label="isMobileMenuOpen ? 'Menue schliessen' : 'Menue oeffnen'"
            @click="setMobileMenuState(!isMobileMenuOpen)"
          >
            <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
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
        class="lg:hidden bg-dark-800/95 backdrop-blur-xl border-t border-white/5 max-h-[calc(100vh-5rem)] overflow-y-auto"
        aria-label="Mobile Navigation"
      >
        <div class="px-4 py-6 space-y-1">
          <template v-for="item in navItems" :key="item.label">
            <NuxtLink
              v-if="item.to && !item.children"
              :to="item.to"
              class="block px-4 py-3 text-base text-dark-100 hover:text-white hover:bg-white/5 rounded-lg"
              @click="setMobileMenuState(false)"
            >
              {{ item.label }}
            </NuxtLink>
            <template v-if="item.children">
              <div class="px-4 py-2 text-xs font-semibold text-dark-300 uppercase tracking-wider" role="heading" aria-level="2">
                {{ item.label }}
              </div>
              <NuxtLink
                v-for="child in item.children"
                :key="child.label"
                :to="child.to"
                class="block px-8 py-2.5 text-sm text-dark-100 hover:text-white hover:bg-white/5 rounded-lg"
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
