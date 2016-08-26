const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'EAGxOxford',
    tagline: 'Doing Good Better',
    conf_date: "18-20 November 2016",
  });
});

module.exports = router;
