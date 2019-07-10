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
        ${collections.post
          .map(post => `<li><a href="${post.url}">${post.data.title}</a></li>`)
          .join("")}
      </ul>
    </div>
    `;
  }
};
