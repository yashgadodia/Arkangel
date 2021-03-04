export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'arkangel',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  env: {
    FIRE_ENV: process.env.FIRE_ENV
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: process.env.FIRE_KEY,
          // authDomain: '<authDomain>',
          projectId: process.env.FIRE_PROJECTID,
          // storageBucket: '<storageBucket>',
          // messagingSenderId: '<messagingSenderId>',
          // appId: '<appId>',
          // measurementId: '<measurementId>'
        },
        services: {
          // auth: false,
          // firestore: false,
          // functions: false,
          // storage: false,
          database: true,
          // messaging: false,
          // performance: false,
          // analytics: false,
          // remoteConfig: false
        }
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
