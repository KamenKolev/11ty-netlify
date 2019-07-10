module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");

  eleventyConfig.addCollection("postsReversed", collection =>
    collection.getFilteredByTag("post").reverse(),
  );

  return {
    PassthroughFileCopy: true,
  };
};
