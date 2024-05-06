const { Video, User } = require("../models");

module.exports = {
  async getVideos(req, res) {
    try {
      const videos = await Video.find({});
      res.json(videos);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleVideo(req, res) {
    try {
      const video = await Video.findOne({ _id: req.params.videoId });

      if (!video) {
        return res.status(404).json({ message: "No video with that ID" });
      }

      res.json(video);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new video
  async createVideo(req, res) {
    try {
      const video = await Video.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { videos: video._id } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({
          message: "Video created, but found no user with that ID",
        });
      }

      res.json("Created the video 🎉");
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async updateVideo(req, res) {
    try {
      const video = await Video.findOneAndUpdate(
        { _id: req.params.videoId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!video) {
        return res.status(404).json({ message: "No video with this id!" });
      }

      res.json(video);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async deleteVideo(req, res) {
    try {
      const video = await Video.findOneAndRemove({ _id: req.params.videoId });

      if (!video) {
        return res.status(404).json({ message: "No video with this id!" });
      }

      const user = await User.findOneAndUpdate(
        { videos: req.params.videoId },
        { $pull: { videos: req.params.videoId } },
        { new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: "Video deleted but no user with this id!" });
      }

      res.json({ message: "Video successfully deleted!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Add a video response
  async addVideoResponse(req, res) {
    try {
      const video = await Video.findOneAndUpdate(
        { _id: req.params.videoId },
        { $addToSet: { responses: req.body } }
        // { runValidators: true, new: true }
      );

      if (!video) {
        return res.status(404).json({ message: "No video with this id!" });
      }

      res.json(video);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Remove video response
  async removeVideoResponse(req, res) {
    try {
      console.log("params", req.params);
      const video = await Video.findOneAndUpdate(
        { _id: req.params.videoId },
        { $pull: { responses: { reactionId: req.params.responseId } } },
        { runValidators: true, new: true }
      );

      if (!video) {
        return res.status(404).json({ message: "No video with this id!" });
      }

      res.json(video);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
