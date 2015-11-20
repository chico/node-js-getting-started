'use strict';

var pjson = require('../package.json');

var api = require('./controllers/api');

var apibase = '/api/1.0';

module.exports = function(app, config) {

	app.get('/', function(request, response) {
  	response.render('pages/index', {name:pjson.name, version:pjson.version});
	});

 	api.init(config, function() {});

  app.get(apibase + '/ping', api.ping);

  app.get(apibase + '/*', function(req, res) {res.send(404);});
  app.post(apibase + '/*', function(req, res) {res.send(404);});
};

