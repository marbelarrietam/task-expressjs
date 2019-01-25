const router = require('express').Router();

const tasks = require('./tasks/routes');

router.route('/').get((req, res, next) => {
  res.json({
    message: 'Welcome',
  });
});

router.use('/tasks', tasks);

module.exports = router;