var express = require('express');
var app = express();

const path = require('path');

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get("/chillin", function(req, res){
  res.send("no boss");
});

module.exports = app;
