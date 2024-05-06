const { Tags, Post } = require('../models');

module.exports = {
  async getTags(req, res) {
    try {
      const tags = await Tags.find({})
        .select('-__v');
      res.json(tags);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleTag(req, res) {
    try {
      const tag = await Tags.findOne({ _id: req.params.tagId })
        .select('-__v');

      !tag
        ? res.status(404).json({ message: 'No tag with that ID' })
        : res.json(tag);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new tag
  async createTag(req, res) {
    try {
      const tag = Tags.create(req.body);
      const post = Post.findOneAndUpdate(
        { _id: req.body.postId },
        { $addToSet: { tags: tag._id } },
        { new: true }
      );

      !post
        ? res
          .status(404)
          .json({ message: 'Tag created, but found no post with that ID' })
        : res.json('Created the tag 🎉');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
