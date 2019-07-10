module.exports = function(eleventyConfig) {
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
