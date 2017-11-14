var express = require('express');
var application = express();

var cors = require('cors');

var posts = require('./data').posts;

application.use(cors());

application.get('/', function(req, res) {
  res.json(posts);
});

application.listen(3002, function() {
  console.log('Server on 3002');
});
