// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'UACEF - The United Akokwa Christian Elites Forum.',
      meta: [
        { name: 'description', content: 'The United Akokwa Christian Elites Forum is a non denominational forum with a special assignment for our land and our generation - Helping the needy, blessing the poor and putting smiles on the faces of our countrymen. We have been working at it for over 2 DECADES and we won\'t stop anytime soon.' },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:site_name', content: "UACEF"},
        { hid: 'og:title', property: 'og:title', content: 'UACEF - The United Akokwa Christian Elites Forum.'},
        { hid: 'og:description', property: 'og:description', content: 'The United Akokwa Christian Elites Forum is a non denominational forum with a special assignment for our land and our generation - Helping the needy, blessing the poor and putting smiles on the faces of our countrymen. We have been working at it for over 2 DECADES and we won\'t stop anytime soon.'},
        { hid: 'og:image', property: 'og:image', content: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1678319143/uacef/uacef-logo_v9ocs6.png'},
        { hid: 'og:url', property: 'og:url', content: 'https://uacef.demo.joshytheprogrammer.com'},
      ],
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-icon'
  ]
})
