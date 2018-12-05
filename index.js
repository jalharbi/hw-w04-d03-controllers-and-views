var express = require('express');
var mustache = require('mustache-express');
var app = express();
var port = 3000;


app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


var angrybirdsControllers = require('./controllers/angryBirds_controller');


app.use('/angry_birds', angrybirdsControllers);

app.get('/', function(request, response){
    response.send('This is a Angry Birds game information.')
  })
  




app.listen(port, function () {
    console.log(`App is listening on port ${port}`);
  })
