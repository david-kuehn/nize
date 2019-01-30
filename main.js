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

//Make public files accessible
app.use(express.static('public'));


//Handle root routes

//Route: /newsite
app.get('/newsite', function (req, res) {
  //Serve static HTML page
  res.sendFile(path.join(__dirname, 'public', 'newsite.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
