const express = require('express');
const app = express();
const port = 3000;

const path = require('path');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//Import external routers/routes
const llapi = require('./llapi');
app.use('/llapi', llapi);
const siteaccess = require('./siteaccess');
app.use('/site', siteaccess);

app.use(express.static('public'));

app.get('/newsite', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'newsite.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
