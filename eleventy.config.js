import govukEleventyPlugin from '@x-govuk/govuk-eleventy-plugin'

export default function (eleventyConfig) {
  // Options to customise the appearance of your design history
  // https://x-govuk.github.io/govuk-eleventy-plugin/options/
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    stylesheets: [
      '/styles/application.css'
    ],
    themeColour: '#005eb8',
    icons: {
      mask: 'mask-icon.svg',
      shortcut: 'favicon.ico',
      touch: 'apple-touch-icon.png'
    },
    opengraphImageUrl: 'opengraph-image.png',
    headingPermalinks: true,
    header: {
      logotype: {
        html: `<svg class="app-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 32" height="40" aria-hidden="true" focusable="false"><path fill="currentColor" d="M80 0v32H0V0h80ZM69 2.2c-5.8 0-11.6 2-11.6 8.8 0 7.4 10.2 5.8 10.2 10 0 2.6-3.4 3-5.6 3-2.2 0-5-.6-6.4-1.4L54 28c2.2.8 5.4 1.4 8 1.4 6.2 0 12.8-1.8 12.8-9 0-7.8-10.2-6.6-10.2-10.2 0-2.2 2.2-2.6 5-2.6 2.6 0 4.4.6 5.8 1.2L77 3.4c-1.8-.8-4.8-1.2-8-1.2ZM16.6 3H7.8L2.2 29h6.6l3.6-18h.2L18 29h8.6l5.6-26h-6.6L22 21h-.2L16.6 3Zm25.2 0h-7.2l-5.2 26h6.8l2.4-11.2h8.2L44.6 29h7L57 3h-7l-2.2 9.8h-8l2-9.8Z"/></svg>`,
      },
      productName: 'Design history',
      search: {
        indexPath: '/search.json',
        sitemapPath: '/sitemap'
      }
    },
    footer: {
      copyright: {
        text: '© NHS England'
      },
    },
    url:
      process.env.GITHUB_ACTIONS &&
      'https://x-govuk.github.io/nhsuk-design-history-template/'
  })

  // Passthrough
  eleventyConfig.addPassthroughCopy({ './app/images': '.' })

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      layouts: '_layouts',
      includes: '_components'
    },
    pathPrefix: process.env.GITHUB_ACTIONS && '/nhsuk-design-history-template/'
  }
}
