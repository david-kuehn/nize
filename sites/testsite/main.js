var express = require('express');
var app = express();

app.get("/", function(req, res){
  res.json({status: "SUCCESS!!!!!!"});
});
app.get("/chillin", function(req, res){
  res.send("no boss");
});

module.exports = app;
