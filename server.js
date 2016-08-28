var express = require('express');
var $       = require('jquery');
var app     = express();
var PORT    = 3000;

app.use('/', function(req, res) {
  res.send('hullo world');
});

app.listen(PORT, function(){
  console.log('listening on port: ' + PORT);
});
