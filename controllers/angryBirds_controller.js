var express = require('express');
var router = express.Router();

var birds = require('../modules/angry_birds');

// get the object value 
router.get('/', function(request,response){
    var typeOfBirds = birds;

response.send(` the birds catagory ${typeOfBirds}`)
})
  

router.get('/:bird', function (request, response) {
    var angryBirdCatagory = request.params.bird;
    var birds = birds[angryBirdCatagory]
 
    var mustacheVariable = {
        angryBirdsList: birds,
        angryBirdsid: birds.id,
        angryBirdsAbilites: birds.abilites,
        angryBirdsGroup: birds.group,
        angryBirdsSpecies: birds.species,
        angryBirdsFeels: birds.feels,
    }
response.render('./angry_birds/index', mustacheVariable) 
})
module.exports = router;