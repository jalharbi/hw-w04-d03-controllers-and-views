// requiring dependencies *** everytime we need to set this 
var express = require('express');
var mustache = require('mustache-express');

// app specific variables*** everytime we need to set this 
var app = express();
var port = 3000;

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


var angrybirdsControllers = require('./controllers/angryBirds_controller');


app.use('/angry_birds', angrybirdsControllers);
// to check the page work !!*** everytime we need to set this 
app.get('/', function(request, response){
    response.send('This is a Angry Birds game information.')
  })
  



// set up our app to listen to a port*** everytime we need to set this 
app.listen(port, function () {
    console.log(`App is listening on port ${port}`);
  })
