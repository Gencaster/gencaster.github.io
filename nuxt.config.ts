const metaTitle = 'Gencaster'
const siteUrl = 'https://gencaster.org/'
const metaDescription
    = 'A non-linear audio streaming framework for real-time radiophonic experiences and live music.'
const siteImage = {
  url: '/ogimage.png',
  height: 630,
  width: 1200,
  type: 'image/png',
}

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: metaTitle,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: metaDescription },
        // Twitter Card data
        { name: 'twitter:title', content: metaTitle, hid: 'co' },
        { name: 'twitter:description', content: metaDescription, hid: 'co' },
        { name: 'twitter:image', content: siteImage.url, hid: 'co' },
        // Open Graph
        { property: 'og:title', content: metaTitle, hid: 'co' },
        { property: 'og:description', content: metaDescription, hid: 'og:description' },
        { property: 'og:type', content: 'Website' },
        { property: 'og:url', content: siteUrl },
        { property: 'og:image', content: siteImage.url, hid: 'og:image' },
        { property: 'theme-color', content: '#FFFFFF' },
      ],
    },
  },

    components: [
    {
      path: '~/components', // will get any components nested in let's say /components/test too
      pathPrefix: false,
    },
  ],

	modules: ["@nuxt/content"],
  css: ['@/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./assets/scss/variables.scss"; @import "./assets/scss/mixins.scss";',
        },
      },
    },
  },
});
