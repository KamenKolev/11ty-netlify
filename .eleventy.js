module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");

  return {
    PassthroughFileCopy: true,
  };
};
