const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

router.use('/', homeRoutes); // for front end
router.use('/api', apiRoutes); // for back end

module.exports = router;