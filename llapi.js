//Handles routes for all LLAPI HTTP calls

var express = require('express');
var app = express();
var router = express.Router();

var git = require('nodegit');

var fs = require('fs');

router.post('/createsite', function (req, res) {
  var sitename = req.body.sitename;
  var repoURL = req.body.urlinput;

  //Check if directory with site name exists
  if (!fs.existsSync('./sites/' + sitename)){
    //if not, create one
    fs.mkdirSync('./sites/' + sitename);
  }

  git.Clone(repoURL, "./sites/" + sitename);

  console.log("Create site request for URL: " + repoURL);
  res.send("received URL: " + repoURL);
});

module.exports = router;
