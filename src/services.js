var request = require('superagent');

var apiBaseUrl = '/api';//'https://onevone-demo.herokuapp.com'  || 'http://localhost:5000';

var Services = function(){
  var self = this;

  self.searchSummoner = function(summonerName, regionId, callback){
    request
      .get(apiBaseUrl + '/search/region/'+ regionId +'/summoner/' + summonerName)
      .end(function(err, res){
        var summoner = res.body;
        if(summoner && !err){
          callback(summoner);          
        }
      }); 
  };

  self.getSummonerById = function(summonerId, regionId, callback){
    request
      .get(apiBaseUrl + '/region/'+ regionId + '/summoner/' + summonerId)
      .end(function(err, res){
        var summoner = res.body;
        if(summoner && !err){
          callback(summoner);
        }  
      }); 
  };

  self.getTournamentById = function(tournamentId, callback){
    request
      .get(apiBaseUrl + '/tournament/' + tournamentId)
      .end(function(err, res){
        var tournament = res.body;
        if(tournament && !err){
          callback(tournament);
        }  
      }); 
  };

  self.createTournament = function(tournament, callback){
   request
      .post(apiBaseUrl + '/tournament/create')
      .set('Content-Type', 'application/json')
      .send(tournament)
      .end(function(err, res){
        var createdtournament = res.body;
        if(createdtournament && !err){
          callback(createdtournament);
        }
      });
  };

  self.startTournament = function(tournamentId, callback){
    request
      .get(apiBaseUrl +'/tournament/'+ tournamentId + '/start')
      .end(function(err, res){
        var tournament = res.body;
        if(tournament && !err){
          callback(tournament);
        }
      });
  };

  self.getStandingsForTournamentById = function(tournamentId, callback){
    request
      .get(apiBaseUrl + '/tournament/' + tournamentId + '/standings')
      .end(function(err, res){
        var standings = res.body;
        if(standings && !err){
          callback(standings);
        }  
      }); 
  };

};

module.exports = new Services;


