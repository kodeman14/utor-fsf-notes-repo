const router = require('express').Router();

// Import our files containing our routes
const feedbackRouter = require('./feedback');
const tipsRouter = require('./tips');

router.use('/feedback', feedbackRouter);
router.use('/tips', tipsRouter);

module.exports = router;
