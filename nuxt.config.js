export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Geo Garden',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Персональный геосервис компании "Garden Group"',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'assets/media/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.26/css/uikit.min.css',
      },
    ],
    script: [
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.26/js/uikit.min.js',
        async: 'true',
      },
    ],
  },

  loading: { color: '#3B8070' },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'uikit/dist/css/uikit.min.css',
    'uikit/dist/css/uikit.css',
    '~/assets/css/custom_styles.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/nuxt-offline-alert.js', ssr: false },
    { src: '~/plugins/uikit.js', ssr: false },
    { src: '~plugins/axios', ssr: false },
    { src: '~plugins/burger', ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/bulma',
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
    'nuxt-material-design-icons',
  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'auth/local',
            method: 'post',
            propertyName: 'jwt',
          },
          user: {
            url: 'users/me',
            method: 'get',
            propertyName: false,
          },
          logout: false,
        },
      },
    },
  },
  redirect: {
    login: '/users/signin',
    logout: '/',
    callback: '/users/signin',
    home: '/',
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.API_AUTH_URL,
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  pwa: {
    icon: {
      source: 'assets/media/ms-icon-310x310.png',
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
      short_name: 'Geo Garden',
      lang: 'ru',
      useWebmanifestExtension: false,
    },
    workbox: {
      workboxURL:
        'https://cdn.jsdelivr.net/npm/workbox-cdn/workbox/workbox-sw.js',
    },
  },
};
