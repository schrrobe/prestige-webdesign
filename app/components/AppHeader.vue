<script setup lang="ts">
import { MAIN_NAV, CONTACT } from '~/data/site'

const route = useRoute()
const menuOpen = ref(false)
const servicesOpen = ref(false)

const mobileNav = ref<HTMLElement | null>(null)
const menuButton = ref<HTMLElement | null>(null)
const servicesWrap = ref<HTMLElement | null>(null)

onBeforeUnmount(() => {
  if (import.meta.client) document.documentElement.style.overflow = ''
})

/* ---------- Leistungen-Untermenü (Desktop) ---------- */
onClickOutside(servicesWrap, () => { servicesOpen.value = false })

/* ---------- Mobiles Menü ---------- */
watch(menuOpen, async (open) => {
  document.documentElement.style.overflow = open ? 'hidden' : ''
  if (open) {
    await nextTick()
    mobileNav.value?.querySelector<HTMLElement>('a[href]')?.focus()
  }
})

function closeMenu(returnFocus = false) {
  menuOpen.value = false
  if (returnFocus) menuButton.value?.focus()
}

function onMenuKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') return closeMenu(true)
  if (e.key !== 'Tab' || !mobileNav.value) return
  const focusables = Array.from(mobileNav.value.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'))
  const first = focusables[0]
  const last = focusables[focusables.length - 1]
  if (!first || !last) return
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault()
    last.focus()
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault()
    first.focus()
  }
}

watch(() => route.fullPath, () => {
  menuOpen.value = false
  servicesOpen.value = false
})

function isActive(to: string) {
  return to === '/' ? route.path === '/' : route.path.startsWith(to)
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-hair bg-paper">
    <div class="wrap flex h-[var(--header-h)] items-center gap-4">
      <SiteLogo class="mr-auto lg:mr-0" />

      <!-- Desktop-Navigation -->
      <nav class="ml-auto hidden lg:block" aria-label="Hauptnavigation">
        <ul class="flex items-center">
          <li v-for="item in MAIN_NAV" :key="item.to" class="relative">
            <div v-if="item.children" :ref="(el) => { servicesWrap = el as HTMLElement | null }" class="flex items-center" @keydown.esc="servicesOpen = false">
              <NuxtLink
                :to="item.to"
                class="nav-link"
                :class="{ 'nav-link-active': isActive(item.to) }"
                :aria-current="route.path === item.to ? 'page' : undefined"
              >{{ item.label }}</NuxtLink>
              <button
                type="button"
                class="-ml-2 grid h-11 w-9 place-items-center hover:text-accent"
                :aria-expanded="servicesOpen"
                aria-controls="nav-services"
                @click="servicesOpen = !servicesOpen"
              >
                <span class="sr-only">Untermenü Leistungen</span>
                <AppIcon name="chevron-down" class="h-4 w-4 transition-transform duration-200" :class="{ 'rotate-180': servicesOpen }" />
              </button>
              <ul
                v-show="servicesOpen"
                id="nav-services"
                class="absolute left-0 top-full mt-2 w-64 rounded-lg border border-hair bg-paper py-2 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.18)]"
              >
                <li v-for="child in item.children" :key="child.to">
                  <NuxtLink
                    :to="child.to"
                    class="block px-4 py-2.5 font-medium hover:bg-stone"
                    :aria-current="route.path === child.to ? 'page' : undefined"
                    @click="servicesOpen = false"
                  >{{ child.label }}</NuxtLink>
                </li>
              </ul>
            </div>
            <NuxtLink
              v-else
              :to="item.to"
              class="nav-link"
              :class="{ 'nav-link-active': isActive(item.to) }"
              :aria-current="route.path === item.to ? 'page' : undefined"
            >{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </nav>

      <NuxtLink to="/kontakt" class="btn btn-primary !min-h-11 !px-4 text-[0.875rem] sm:!px-5">
        <span class="sm:hidden">Anfragen</span>
        <span class="hidden sm:inline">Erstgespräch anfragen</span>
      </NuxtLink>

      <button
        ref="menuButton"
        type="button"
        class="-mr-2 grid h-12 w-12 place-items-center lg:hidden"
        aria-controls="mobile-navigation"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        <span class="sr-only">{{ menuOpen ? 'Menü schließen' : 'Menü öffnen' }}</span>
        <AppIcon :name="menuOpen ? 'close' : 'menu'" class="h-7 w-7" />
      </button>
    </div>

    <!-- Mobiles Menü: ganze Seite, große Ziele, Daumen-erreichbar -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0"
    >
      <nav
        v-if="menuOpen"
        id="mobile-navigation"
        ref="mobileNav"
        class="fixed inset-x-0 bottom-0 top-[var(--header-h)] overflow-y-auto border-t border-hair bg-paper lg:hidden"
        aria-label="Hauptnavigation"
        @keydown="onMenuKeydown"
      >
        <div class="wrap flex min-h-full flex-col pb-8 pt-4">
          <ul class="divide-y divide-hair border-b border-hair">
            <li v-for="item in MAIN_NAV" :key="item.to">
              <NuxtLink
                :to="item.to"
                class="flex min-h-16 items-center justify-between py-3 font-serif text-[2rem] leading-none"
                style="font-weight: 500; font-variation-settings: 'opsz' 48;"
                :aria-current="route.path === item.to ? 'page' : undefined"
                @click="closeMenu()"
              >
                {{ item.label }}
                <AppIcon name="arrow-right" class="h-5 w-5 text-accent" />
              </NuxtLink>
              <ul v-if="item.children" class="-mt-1 grid grid-cols-2 gap-x-4 pb-4">
                <li v-for="child in item.children" :key="child.to">
                  <NuxtLink
                    :to="child.to"
                    class="flex min-h-11 items-center font-semibold text-ink-soft"
                    :aria-current="route.path === child.to ? 'page' : undefined"
                    @click="closeMenu()"
                  >{{ child.label }}</NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
          <div class="mt-auto pt-8">
            <NuxtLink to="/kontakt" class="btn btn-primary w-full" @click="closeMenu()">
              Kostenloses Erstgespräch
            </NuxtLink>
            <a :href="`mailto:${CONTACT.email}`" class="mt-4 flex min-h-11 items-center justify-center gap-2 font-semibold">
              <AppIcon name="mail" class="h-5 w-5" />
              {{ CONTACT.email }}
            </a>
          </div>
        </div>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.nav-link {
  @apply relative flex min-h-11 items-center whitespace-nowrap px-3 text-[0.9375rem] font-medium xl:px-4;
}
.nav-link::after {
  content: '';
  @apply absolute inset-x-3 bottom-2 h-px origin-left scale-x-0 bg-ink transition-transform duration-300 ease-out xl:inset-x-4;
}
.nav-link:hover::after,
.nav-link-active::after { @apply scale-x-100; }
.nav-link-active { @apply text-accent; }
.nav-link-active::after { @apply bg-accent; }
</style>
