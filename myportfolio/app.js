let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let app = express();

// Set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' }); // Home page will use the default content in index.ejs
});

app.get('/about', (req, res) => {
  res.render('index', { title: 'About', body: '<%- include("about") %>' });
});

app.get('/projects', (req, res) => {
  res.render('index', { title: 'Projects', body: '<%- include("projects") %>' });
});

app.get('/contact', (req, res) => {
  res.render('index', { title: 'Contact', body: '<%- include("contact") %>' });
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
  res.render('error', { title: 'Error' });
});

module.exports = app;

