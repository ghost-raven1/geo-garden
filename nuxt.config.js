export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Geo Garden',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Персональный геосервис компании "Garden Group"' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { hid: 'uikit_min_js', src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.8/js/uikit.min.js', defer: true },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "uikit/dist/css/uikit.min.css",
    "uikit/dist/css/uikit.css",
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/uikit.js', ssr: false },
    { src: '~/plugins/nuxt-offline-alert.js', ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  pwa: {
    icon: {
      source: '~/static/icon.png'
    },
    meta: {
      mobileApp: true,
      name: 'Geo Garden',
      author: 'Alex Starodubtsev',
      description: 'Персональный геосервис компании "Garden Group"',
      theme_color: '#fff',
      lang: 'ru',
    },
    manifest: {
      name: 'Geo Garden',
      lang: 'ru',
      useWebmanifestExtension: false
    },
    workbox: {
      workboxURL: 'https://cdn.jsdelivr.net/npm/workbox-cdn/workbox/workbox-sw.js',
    }
  }
}
