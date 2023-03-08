// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'UACEF - The United Akokwa Christian Elites Forum.',
      meta: [
        { name: 'description', content: 'The United Akokwa Christian Elites Forum formerly Akokwa Christian Elites Forum was formed on 20th April 2000 as a mustard seed planted that has grown over the years to be a standing Iroko tree for the gospel of the kingdom of God in our land, state and nation at large.' }
      ],
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-icon'
  ],
})
