import { nhsukEleventyPlugin } from "@x-govuk/nhsuk-eleventy-plugin";

export default function (eleventyConfig) {
  // Options to customise the appearance of your design history
  // https://x-govuk.github.io/nhsuk-eleventy-plugin/get-started/options/
  eleventyConfig.addPlugin(nhsukEleventyPlugin, {
    header: {
      service: {
        text: "Design history",
      },
    },
    headingPermalinks: true,
    stylesheets: ["/styles/application.css"],
    templates: {
      searchIndex: true,
      tags: true,
    },
    url:
      process.env.GITHUB_ACTIONS &&
      "https://x-govuk.github.io/govuk-design-history-template/",
  });

  // Nunjucks filters
  eleventyConfig.addFilter("push", (array, item) => {
    const newArray = [...array];
    newArray.push(item);

    return newArray;
  });

  // Passthrough
  eleventyConfig.addPassthroughCopy({ "./app/images": "." });

  // Config
  return {
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: "app",
      includes: "_components",
      layouts: "_layouts",
    },
    pathPrefix: process.env.GITHUB_ACTIONS && "/govuk-design-history-template/",
  };
}
