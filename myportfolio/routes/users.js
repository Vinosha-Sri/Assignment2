// Imports the Express module
var express = require('express');

// Creates a new router object
var router = express.Router();

// Defines a route for the root URL of the users page
// This will respond to GET requests at '/users'
router.get('/', function(req, res, next) {
  // Sends a simple text response when this route is accessed
  res.send('User Page');
});

// Exports the router object so it can be used in other parts of the application
module.exports = router;
