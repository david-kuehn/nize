const express = require('express');
const app = express();
const port = 3000;

const path = require('path');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//Import external routers/routes
//Send all routes beginning with '/llapi' to:
const llapi = require('./llapi');
app.use('/llapi', llapi);
//Send all routes beginning with '/site' to:
const siteaccess = require('./siteaccess');
app.use('/sites', siteaccess);

//Make public files accessible FOR NIZE ITSELF
app.use(express.static('public'));

//Make public files for all sites running on Nize available
const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');

const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source =>
readdirSync(source).map(name => join(source, name)).filter(isDirectory)

//Get array of all loaded sites' directories
var sitesLoaded = getDirectories('sites');

//For each loaded site, give its 'public' folder a static route
sitesLoaded.forEach(function(site) {
  app.use('/sites/site/' + site.split('\\')[1] + '/public', express.static('sites/' + site.split('\\')[1] + '/public'));
});


//Handle root routes
//Route: /newsite
app.get('/newsite', function (req, res) {
  //Serve static HTML page
  res.sendFile(path.join(__dirname, 'public', 'newsite.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
