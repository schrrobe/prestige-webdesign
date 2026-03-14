<script setup lang="ts">
const currentYear = new Date().getFullYear()

const footerLinks = {
  leistungen: [
    { label: 'Webdesign', to: '/leistungen/webdesign' },
    { label: 'Webanwendungen', to: '/leistungen/webanwendungen' },
    { label: 'SEO', to: '/leistungen/seo' },
    { label: 'E-Commerce', to: '/leistungen/e-commerce' },
    { label: 'Wartung & Support', to: '/leistungen/wartung' },
  ],
  standorte: [
    { label: 'Webdesign Dortmund', to: '/webdesign-dortmund' },
    { label: 'Webdesign Bochum', to: '/webdesign-bochum' },
    { label: 'Webdesign Essen', to: '/webdesign-essen' },
    { label: 'Webdesign Bottrop', to: '/webdesign-bottrop' },
    { label: 'Webdesign Unna', to: '/webdesign-unna' },
  ],
  rechtliches: [
    { label: 'Impressum', to: '/impressum' },
    { label: 'Datenschutz', to: '/datenschutz' },
  ],
}
</script>

<template>
  <footer class="bg-dark-950 border-t border-white/5">
    <!-- Main Footer -->
    <div class="container-narrow mx-auto section-padding !pb-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Brand -->
        <div class="lg:col-span-1">
          <NuxtLink to="/" class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center font-display font-bold text-lg text-white">
              P
            </div>
            <div>
              <span class="text-lg font-bold text-white">Prestige</span>
              <span class="text-lg font-light text-primary-400 ml-1">Webdesign</span>
            </div>
          </NuxtLink>
          <p class="text-dark-200 text-sm leading-relaxed mb-6">
            Ihre professionelle Webagentur im Ruhrgebiet. Modernes Webdesign, SEO und E-Commerce aus Dortmund.
          </p>
          <div class="space-y-2 text-sm text-dark-200">
            <p>Robert Schreiner</p>
            <p>Kapitelwiese 14, 44263 Dortmund</p>
            <a href="mailto:info@prestige-webdesign.de" class="text-primary-400 hover:text-primary-300 transition-colors block">
              info@prestige-webdesign.de
            </a>
          </div>
        </div>

        <!-- Leistungen -->
        <div>
          <h3 class="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Leistungen</h3>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.leistungen" :key="link.to">
              <NuxtLink :to="link.to" class="text-dark-200 hover:text-white text-sm transition-colors duration-200">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Standorte -->
        <div>
          <h3 class="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Standorte</h3>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.standorte" :key="link.to">
              <NuxtLink :to="link.to" class="text-dark-200 hover:text-white text-sm transition-colors duration-200">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- CTA -->
        <div>
          <h3 class="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Lassen Sie uns gemeinsam wachsen</h3>
          <p class="text-dark-200 text-sm mb-6">Ihre Anfrage ist willkommen – wir antworten meist innerhalb von 24 Stunden.</p>
          <NuxtLink to="/kontakt" class="btn-primary text-sm !px-6 !py-3">
            Kontakt aufnehmen
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-white/5">
      <div class="container-narrow mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-dark-300 text-xs">
          &copy; {{ currentYear }} Prestige Webdesign. Alle Rechte vorbehalten.
        </p>
        <div class="flex gap-6">
          <NuxtLink
            v-for="link in footerLinks.rechtliches"
            :key="link.to"
            :to="link.to"
            class="text-dark-300 hover:text-white text-xs transition-colors duration-200"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
