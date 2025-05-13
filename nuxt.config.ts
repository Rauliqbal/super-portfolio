// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Rauliqbal | Front-End Developer and UI Designer'
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxt/image'],
  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700], 
    },
    display: 'swap', 
  },
})