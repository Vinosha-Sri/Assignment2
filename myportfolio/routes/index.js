var express = require('express');
var router = express.Router();

// Home route
router.get('/', function(req, res, next) {
    res.render('index');
});

// About route
router.get('/about', function(req, res, next) {
    res.render('about');
});

// Projects route
router.get('/projects', function(req, res, next) {
    res.render('projects');
});

// Contact route
router.get('/contact', function(req, res, next) {
    res.render('contact');
});

module.exports = router;
