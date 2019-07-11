const pluginRss = require("@11ty/eleventy-plugin-rss")
const CleanCSS = require("clean-css")
const fs = require("fs")
const htmlmin = require("html-minifier")

module.exports = function(eleventyConfig) {
  // borrowed from https://github.com/11ty/eleventy-base-blog/commit/e2be85925d9c43f9a56dc4fd2767ca42d2acf2be
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync("_site/404.html")

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404)
          res.end()
        })
      },
    },
  })

  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      })
      return minified
    }

    return content
  })

  eleventyConfig.addPlugin(pluginRss)

  eleventyConfig.addPassthroughCopy("img")
  eleventyConfig.addPassthroughCopy("css")
  eleventyConfig.addPassthroughCopy("admin")

  eleventyConfig.addCollection("postsReversed", collection =>
    collection.getFilteredByTag("post").reverse(),
  )

  return {
    PassthroughFileCopy: true,
  }
}
