var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressLayouts = require('express-ejs-layouts');

var app = express();

// Set up express-ejs-layouts
app.use(expressLayouts);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
  console.log('Rendering Home page with title');
  res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
  console.log('Rendering About page with title');
  res.render('about', { title: 'About' });
});

app.get('/projects', (req, res) => {
  console.log('Rendering Projects page with title');
  res.render('projects', { title: 'Projects' });
});

app.get('/contact', (req, res) => {
  console.log('Rendering Contact page with title');
  res.render('contact', { title: 'Contact' });
});

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
