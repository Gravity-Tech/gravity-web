const { sections, metaTags, flattenSections, shortDescription, getSitemap } = require('./src/global/links');

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: shortDescription,
    meta: metaTags,
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Orbitron:400,500,600,700,800,900|Poppins:100,200,300,400,500,600,700,800,900&display=swap',
      },
    ],
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#ff8e1e',
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
  srcDir: 'src/',
  modules: ['@aceforth/nuxt-optimized-images', '@nuxtjs/sitemap'],

  router: {
    routes: [
      {
        name: 'index',
        path: '/',
        component: 'pages/index.vue'
      },
      {
        name: 'wp',
        path: '/whitepaper',
        component: 'pages/whitepaper.vue'
      },
    ]
  },

  optimizedImages: {
    optimizeImagesInDev: true,
    optimizeImages: true,
  },

  sitemap: getSitemap(),
};
