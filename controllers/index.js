const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
const apiRoutes = require('./api/index');
const dashboardRoutes = require('./dashboard-routes')

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes)
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
