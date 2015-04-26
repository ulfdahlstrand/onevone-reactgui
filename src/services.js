var request = require('superagent');

var apiBaseUrl = '/api';//'https://onevone-demo.herokuapp.com'  || 'http://localhost:5000';

var Services = function(){
  var self = this;

  self.searchSummoner = function(summonerName, callback){
    request
      .get(apiBaseUrl + '/searchSummoner/' + summonerName)
      .end(function(err, res){
        var summoner = res.body;
        if(summoner && !err){
          callback(summoner);          
        }
      }); 
  };

  self.getSummonerById = function(summonerId, callback){
    request
      .get(apiBaseUrl + '/summoner/' + summonerId)
      .end(function(err, res){
        var summoner = res.body;
        if(summoner && !err){
          callback(summoner);
        }  
      }); 
  };

  self.getTournamentById = function(tournamentId, callback){
    request
      .get(apiBaseUrl + '/tournamnet/' + tournamentId)
      .end(function(err, res){
        var tournament = res.body;
        if(tournament && !err){
          callback(tournament);
        }  
      }); 
  };

  self.getStandingsForTournamentById = function(tournamentId, callback){
    request
      .get(apiBaseUrl + '/tournamnet/' + tournamentId + '/standings')
      .end(function(err, res){
        var standings = res.body;
        if(standings && !err){
          callback(standings);
        }  
      }); 
  };

};

module.exports = new Services;


