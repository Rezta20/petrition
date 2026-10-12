// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],

  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2026-10-11',

  runtimeConfig: {
    // 只有伺服器看得到。真的值從 .env 來：NUXT_DATABASE_URL
    databaseUrl: '',
    public: {
      appName: '寵物飲食報告'
    }
  },

  app: {
    head: {
      htmlAttrs: { lang: 'zh-Hant' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' }
      ]
    }
  }
})
