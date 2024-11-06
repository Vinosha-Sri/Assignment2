var express = require('express');
var router = express.Router();

/* Express route for my home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* Express route for my about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

/* Express route for my projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* Express route for my contacts page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;