var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var keys = require('../public/javascripts/keys')

// These code snippets use an open-source library.

router.get('/list', function(req, res, next) {
  unirest.get("https://ismaelc-pinterest.p.mashape.com/Nilauro/boards")
  .header("X-Mashape-Key", "1t37z6ZtlvmshEIKo41r9f2yjIh1p14TpsnjsnnL0F5emFdSPa")
  .header("Content-Type", "application/x-www-form-urlencoded")
  .header("Accept", "application/json")
  .end(function (result) {
    console.log(result.status);
    res.render('musiclist', { title: 'Music - New Releases', data: result.body });
  });

});

router.get('/comingsoon', function(req, res, next) {
  unirest.get("https://byroredux-metacritic.p.mashape.com/album-list/coming-soon")
  .header("X-Mashape-Key", "1t37z6ZtlvmshEIKo41r9f2yjIh1p14TpsnjsnnL0F5emFdSPa")
  .header("Accept", "application/json")
  .end(function (result) {
    console.log(result.body);
    res.render('musiccoming', { title: 'Music - Coming Soon' , data:result.body});
  });
  
});

module.exports = router;
