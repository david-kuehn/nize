//Handles routes for calls to access user sites

var express = require('express');
var app = express();
var router = express.Router();

router.get('/:siteName', function (req, res) {
  var siteName = req.params.siteName;
  console.log(siteName);
  res.send('Accessed site called: ' + siteName);
});

module.exports = router;
