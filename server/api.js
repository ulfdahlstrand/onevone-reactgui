var App = require("./../core");
var basePath = '/api';
var request = require('superagent');

var apiBaseUrl = process.env.APIBASEURL  || 'http://localhost:5000';

module.exports = function() {
	App.Express.get(basePath + "/searchSummoner/:summonerName", function (req, result) {
		request
	      .get(apiBaseUrl + '/public_client_api/summoner/name/' + req.params.summonerName)
	      .end(function(err, res){
	        result.send(res.body);
	      }); 
	});	

	App.Express.get(basePath + "/summoner/:id", function (req, result) {
		request
	      .get(apiBaseUrl + '/public_client_api/summoner/' + req.params.id)
	      .end(function(err, res){
	        result.send(res.body);
	      }); 
	});	

	App.Express.post(basePath + "/tournament/create", function (req, result) {
		request
	      .post(apiBaseUrl + '/public_client_api/tournament/create')
	      .set('Content-Type', 'application/json')
	      .send(req.body)
	      .end(function(err, res){
	        result.send(res.body);
	      });
	});

	App.Express.get(basePath + "/tournament/:id", function (req, result) {
		request
	      .get(apiBaseUrl + '/public_client_api/tournament/' + req.params.id)
	      .end(function(err, res){
	        result.send(res.body);
	      }); 
	});

	App.Express.get(basePath + "/tournament/:id/start", function (req, result) {
	    request
	        .get(apiBaseUrl +'/public_client_api/tournament/'+ req.params.id + '/start')
	        .end(function(err, res){
	        	result.send(res.body);
	      	}); 
	});

	App.Express.get(basePath + "/tournament/:id/standings", function (req, result) {
		request
	      .get(apiBaseUrl + '/public_client_api/tournament/' + req.params.id + '/standings')
	      .end(function(err, res){
	        result.send(res.body);
	      }); 
	});
};


