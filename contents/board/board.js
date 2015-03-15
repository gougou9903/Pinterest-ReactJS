var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var keys = require('../public/javascripts/keys')
var _ = require('lodash')

/* GET users listing. */
router.get('/list', function(req, res, next) {

  unirest.get("https://ismaelc-pinterest.p.mashape.com/Nilauro/boards")
  .header("X-Mashape-Key", "jwDQlMvlecmsha3BHXgGkvEV2yDYp1VTAEJjsnKm95GwEVWk1f")
  //.header("Content-Type", "application/x-www-form-urlencoded")
  .header("Accept", "application/json")
  .end(function (result) {
    //console.log(result.body);
    var n = result.body.body
    console.log(result.headers)

    for(x in n){
    	var index = n[x].name.indexOf('\n')
    	n[x].name = n[x].name.substring(0,index)
	}
	
    //res.render('boardlist', { title: 'Pinterest', data: n});
    React.render(
        <BoardList data = {n} />,
        document.getElementById('content')
      )
  
  });

});

// router.get('/view/:id', function(req, res, next) {

//   unirest.get("https://ismaelc-pinterest.p.mashape.com/Nilauro/boards")
//   .header("X-Mashape-Key", "jwDQlMvlecmsha3BHXgGkvEV2yDYp1VTAEJjsnKm95GwEVWk1f")
//   //.header("Content-Type", "application/x-www-form-urlencoded")
//   .header("Accept", "application/json")
//   .end(function (result) {
//     //console.log(req.prams.id);
    
//     var id = req.params.id
//     var id2 = id.replace('%20', ' ')
    
//     var n = result.body.body
//     for(x in n){
//     	var index = n[x].name.indexOf('\n')
//     	n[x].name = n[x].name.substring(0,index)
// 	}

    
// console.log(n)
//     var a = _.find(n, function(chr){
//     	return chr.name == id2
//     })
//     res.render('boardview', { title: 'Pinterest', data: a });
    
//     console.log('!!!!!');
    

//   });
	
// });

module.exports = router;
