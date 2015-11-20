'use strict';

var api = require('./controllers/api');

var apibase = '/api/1.0';

module.exports = function(app, config) {

	app.get('/', function(request, response) {
  	response.render('pages/index', {name:config.appName, version:config.appVersion});
	});

 	api.init(config, function() {});

  app.get(apibase + '/ping', api.ping);

  app.get(apibase + '/*', function(req, res) {res.send(404);});
  app.post(apibase + '/*', function(req, res) {res.send(404);});
};

