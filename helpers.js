module.exports = {
  // search posts
  filtered: function filtered(posts, filter) {
    if (posts) {
      return posts.filter((post) =>
        post.message
          .toLowerCase()
          .indexOf(filter.toLowerCase()) !== -1
      );
    }
    return posts;
  }
  
}
