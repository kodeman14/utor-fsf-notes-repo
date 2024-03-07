const router = require('express').Router();

// Import our modular routers for /tips and /feedback
const tipsRouter = require('./tips');
const feedbackRouter = require('./feedback');

router.use('/tips', tipsRouter);
router.use('/feedback', feedbackRouter);

module.exports = router;
