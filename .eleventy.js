const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("admin");

  eleventyConfig.addCollection("postsReversed", collection =>
    collection.getFilteredByTag("post").reverse(),
  );

  return {
    PassthroughFileCopy: true,
  };
};
