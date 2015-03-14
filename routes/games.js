var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var keys = require('../public/javascripts/keys')


/* GET users listing. */
router.get('/', function(req, res, next) {
  // These code snippets use an open-source library.
unirest.post("https://byroredux-metacritic.p.mashape.com/find/game")
.header("X-Mashape-Key", "tPa8qnhn8rmshbjTiHFG0sfWyhLUp1pTn8Wjsn8rvLKVtZ73Jr")
.header("Content-Type", "application/x-www-form-urlencoded")
.header("Accept", "application/json")
.send({"platform":1, "retry":4,"title": "The Elder Scrolls V: Skyrim"})
.end(function (result) {
  console.log(result.body);
  res.render('games', { result: result });
});
//res.render('games', { title: 'Express' });
});

module.exports = router;
