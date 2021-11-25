import axios from 'axios'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'test-nuxt',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  target: 'static',

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/$path',
    '~/plugins/bootstrap.client',
    '~/plugins/directives'
  ],
  router: {
    // middleware: ['auth']
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // '@nuxtjs/auth-next',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL
  },
  auth: {
    strategies: {
      google: {
        clientId: process.env.GOOGLE_ID
      }
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  generate: {
    routes () {
      return axios.get('http://localhost:4000/api/emitents').then((res) => {
        return res.data.map((emitent) => {
          return {
            route: '/emitents/' + emitent.code,
            payload: emitent
          }
        })
      })
    }
  }

}
