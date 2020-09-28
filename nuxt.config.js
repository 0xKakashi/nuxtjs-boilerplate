require('dotenv').config()
import pkg from './package'

export default {
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  target: 'static',
  ssr: false,
  // env: {
  //   apiURL: process.env.API_URL,
  //   cdnURL: process.env.CDN_URL
  // },
  loading: { 
    color: '#fff',
    // failedColor: '#11ee88',
    // height: '2px',
    // throttle: 300
  },
  // loadingIndicator: { name: '~/static/loading.html' },
  // loadingIndicator: {
  //   name: 'circle',
  //   color: '#11ee88',
  //   background: '#fff' 
  // },
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/transition.css'
  ],
  components: true,
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    '@nuxtjs/gtm'
  ],
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/moment'
  ],
  plugins: [
    '~/plugins/initialize.client.js',
    '~/plugins/web3.client.js'
  ],
  // auth: {
  //   strategies: {
  //     local: {
  //     }
  // },
  // axios: {},
  gtm: {
    enabled: false,
    id: process.env.GTM_ID,
    pageTracking: true,
    // variables: {}    
  },
  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js'
      }
    },
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
