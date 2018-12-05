var express = require('express');
var router = express.Router();

var angryBirds = require('../modules/angry_birds');

// check the / works in the page using JS response.send
// router.get('/', function(request,response){
// response.send(` the birds catagories`)
// })
  
// to show the HTML we need response.render
router.get('/', function(request,response){
console.log(angryBirds.birds);
var mustacheData = {
    birdList: angryBirds.birds
};

    response.render('./angry_birds/index',mustacheData )
})
      
router.get('/:id', function (request, response) {
    var birdId = request.params.id;
    console.log(`this the list  ${birdId}`);
var mustacheData = {
    bird: angryBirds.birds[birdId],
};
response.render('./angry_birds/show', mustacheData);
    
})
module.exports = router;
 