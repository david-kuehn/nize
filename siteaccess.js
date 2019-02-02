//Handles routes for calls to access user sites

var express = require('express');
var app = express();
var router = express.Router();

//Load filesystem module
var fs = require('fs');

//Route: /sites/:siteName (ex. /site/testsite)
app.get('/:siteName', function (req, res) {
  //Store the passed sitename
  var siteName = req.params.siteName;

  //If a directory with the specified sitename doesn't exist
  if (!fs.existsSync('./sites/' + siteName)) {
    //Throw an error
    console.log('No site with the name: ' + siteName);
    res.send('No site with the name: ' + siteName);
  }

  //Establish a new route to access the site with the passed sitename
  const site = require(`./sites/${siteName}/main`);
  app.use(`/site/${siteName}`, site);

  //app.use('/sites/site/testsite/testpublic', express.static('testpublic'));

  //Redirect the user to the new route
  res.redirect(`/sites/site/${siteName}`);

  console.log(siteName);
});

module.exports = app;
