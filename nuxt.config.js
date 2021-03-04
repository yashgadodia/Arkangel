const isDev = process.env.NODE_ENV === 'development'
const useEmulators = false // manually change if emulators needed

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

  database: {
    emulatorPort: process.env.NODE_ENV === 'development' ? 9000 : undefined,
    emulatorHost: 'localhost',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/fireark.js' },
    { src: '~plugins/leaflet.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/firebase',
  ],

  firebase: {
    lazy: false,
    config: {
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      databaseURL: process.env.databaseURL,
      projectId: process.env.projectId,
      storageBucket: process.env.storageBucket,
      messagingSenderId: process.env.messagingSenderId,
      appId: process.env.appId,
      measurementId: process.env.measurementId,
    },
    onFirebaseHosting: false,
    terminateDatabasesAfterGenerate: true,
    services: {
      firestore: {
        memoryOnly: false,
        enablePersistence: true,
        emulatorPort: isDev && useEmulators ? 8080 : undefined,
      },
      storage: true,
      database: {
        emulatorPort: isDev && useEmulators ? 9000 : undefined,
      }
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // [
    //   '@nuxtjs/firebase',
    //   {
    //     config: {
    //       apiKey: process.env.FIRE_KEY,
    //       // authDomain: '<authDomain>',
    //       projectId: process.env.FIRE_PROJECTID,
    //       storageBucket: process.env.FIRE_BUCKET,
    //       // messagingSenderId: '<messagingSenderId>',
    //       // appId: '<appId>',
    //       // measurementId: '<measurementId>'
    //     },
    //     services: {
    //       // auth: false,
    //       // firestore: false,
    //       // functions: false,
    //       storage: true,
    //       database: true,
    //       // messaging: false,
    //       // performance: false,
    //       // analytics: false,
    //       // remoteConfig: false
    //     }
    //   }
    // ]
    '@nuxtjs/axios'
  ],

  serverMiddleware: [
    { path: "/api", handler: "~/middleware/server/rest.js" },
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config) {
      config.node = {
        fs: 'empty'
      }
    }
  }
}
