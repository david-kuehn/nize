const express = require('express');
const app = express();
const port = 3000;

const path = require('path');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//Pull routes from llapi.js (all LLAPI routes)
const llapi = require('./llapi');
app.use('/llapi', llapi);

//Make public files accessible
app.use(express.static('public'));

//Route: /newsite
app.get('/newsite', function (req, res) {
  //Serve static HTML page
  res.sendFile(path.join(__dirname, 'public', 'newsite.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
