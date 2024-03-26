const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../../models/User");

// GET one user
router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: "No user with this id!" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST create a new user
router.post("/", async (req, res) => {
  try {
    const newUser = req.body;
    newUser.password = await bcrypt.hash(req.body.password, 10);
    const userData = await User.create(req.body);
    const userRes = userData;
    userRes.password = "";
    res.status(200).json(userRes);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT update a user
router.put("/:id", async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
      individualHooks: true,
    });
    if (!userData[0]) {
      res.status(404).json({ message: "No user with this id!" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
