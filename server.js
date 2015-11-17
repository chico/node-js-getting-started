var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
	var pjson = require('./package.json');
  response.render('pages/index', {name:pjson.name, version:pjson.version});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


