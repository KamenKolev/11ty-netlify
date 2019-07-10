module.exports = class Blog {
  data() {
    return {
      layout: "base.njk"
    };
  }

  render({ collections }) {
    return `
    <div>
      <ul>
        ${collections.postsReversed
          .map(
            post =>
              `<li>
                <a href="${post.url}">${post.data.title}</a>
              </li>`
          )
          // .reverse()
          .join("")}
      </ul>
    </div>
    `;
  }
};
