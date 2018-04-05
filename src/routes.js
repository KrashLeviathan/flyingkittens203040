const express = require('express');
const router = express.Router();

// Routes go here

module.exports = router;


// Example endpoint
router.get('/', function (req, res, next) {
  res.sendFile(__dirname + '/index.html');
  next();
});