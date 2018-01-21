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

application.post('/posts/:id', function(req, res) {
  var like;
  if (req.query.like) {
    switch (req.query.like) {
      case 'add':
        like = 1;
        break;
      case 'remove':
        like = -1;
        break;
      default:
        like = 0;
    }
  };
  var post = posts[req.params.id - 1];
  post.likes += like;
  res.json(post);
});

application.put('/posts/:id', function (req, res) {
  var query = req.query.values;
  var post = (posts.find(post => post.id === parseInt(query.id)));
  var result;
  if (post) {
    post.message = query.title;
    post.metaInfo.createdBy = query.author;
    post.metaInfo.updatedAt = Date.now();
    result = post;
  } else {
    result = "Post not found";
  }
  res.send(result);
});

application.listen(3002, function() {
  console.log('Server on 3002');
});
