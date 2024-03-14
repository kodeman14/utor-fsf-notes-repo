const router = require("express").Router();

// Import our files containing our routes
const feedbackRouter = require("./feedback");
const tipsRouter = require("./tips");
// const otherRouter = require('./other');

router.use("/feedback", feedbackRouter);
router.use("/tips", tipsRouter);
// router.use('/other', otherRouter);

module.exports = router;
