const { Post } = require('../models');

module.exports = {
  async getPosts(req, res) {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (err) {
      console.error({ message: err });
      return res.status(500).json(err);
    }
  },
  async getSinglePost(req, res) {
    try {
      const post = await Post.findOne({ _id: req.params.postId });

      !post
        ? res.status(404).json({ message: 'No post with that ID' })
        : res.json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new post
  async createPost(req, res) {
    try {
      const post = await Post.create(req.body);
      res.json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
