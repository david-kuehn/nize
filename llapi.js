//Handles routes for all LLAPI HTTP calls

//Load Express.js router
var express = require('express');
var app = express();
var router = express.Router();

//Load git module
var git = require('nodegit');

//Load filesystem module
var fs = require('fs');

//Route: /llapi/createsite
router.post('/createsite', function (req, res) {
  //Store data passed by creation form
  var sitename = req.body.sitename;
  var repoURL = req.body.urlinput;

  //Check if directory with site name exists
  if (!fs.existsSync('./sites/' + sitename)){
    //if not, create one
    fs.mkdirSync('./sites/' + sitename);
  }
  
  //Clone the git repo found at the passed URL into subdirectory "/sites" and give it its own directory
  git.Clone(repoURL, "./sites/" + sitename);
  
  console.log("Create site request for URL: " + repoURL);
  
  //Send successful response to client
  res.send("received URL: " + repoURL);
});

module.exports = router;
