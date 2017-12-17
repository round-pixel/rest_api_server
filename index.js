var express = require('express');
var application = express();

var cors = require('cors');

var posts = require('./data').posts;
var filtered = require('./helpers').filtered;

application.use(cors());

application.get('/', function(req, res) {
  if (req.query.search) {
    var filter = req.query.search;
    var result = filtered(posts, filter)
    res.json(result);
  } else {
    res.json(posts);
  };
});

application.get('/posts/:id', function(req, res) {
  res.json(posts[req.params.id - 1]);
});

application.listen(3002, function() {
  console.log('Server on 3002');
});
