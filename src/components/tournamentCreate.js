'use strict';
var React = require('react');
var Router = require('react-router');
var Navigation = Router.Navigation;
var request = require('superagent');
var _ = require('underscore');

var Summoner = require('./summoner');

var ENTER_KEY = 13;
var apiBaseUrl = 'https://onevone-demo.herokuapp.com'  || 'http://localhost:5000';

var TournamentCreate = React.createClass({
    mixins: [Navigation],
    getInitialState: function(){
        return { 
          tournament: null,
          tournamentName: '',
          tournamentStarted: false,
          summonersInTournamnet:[],
          summonerName: '',
          matches:[]
        };
    },
    handleTournamentNameChange: function(e){
        this.setState({tournamentName: e.target.value});
    },  
    handleSummonerNameFieldChange: function(e){
        this.setState({summonerName: e.target.value});
    },  
    handleKeyDown: function(event){
      if (event.which !== ENTER_KEY) {
            return;
        }
        this.searchSummoner(event);
    },
    searchSummoner: function(e){
      var self = this;
      request
        .get(apiBaseUrl + '/public_client_api/summoner/name/' + this.state.summonerName)
        .end(function(err, res){
          var summoner = res.body;
          if(summoner && !err){
            var summoners = self.state.summonersInTournamnet;
            if(!_.contains(summoners, summoner.id)){
              summoners.push(summoner.id);
              self.setState({summonersInTournamnet: summoners, summonerName: ''});
            }
          }
        });
    },
    handleSaveTournament: function(e){
      var self = this;
      request
      .post(apiBaseUrl + '/public_client_api/tournament/create')
        .set('Content-Type', 'application/json')
        .send({'tournamentName': this.state.tournamentName, 'summoners': this.state.summonersInTournamnet})
        .end(function(err, res){
          var tournament = res.body;
          if(tournament && !err){
            self.startTournament(tournament._id);
          }
        });
    },
    startTournament: function(tournamentId){
      var self = this;
      request
        .get(apiBaseUrl +'/public_client_api/tournament/'+ tournamentId+ '/start')
        .end(function(err, res){
          var tournament = res.body;
          if(tournament && !err){
            self.transitionTo('tournament',{ id: tournamentId });
          }
        });
    },
    render: function() {

      var summonersInTournamnet = this.state.summonersInTournamnet.map(getSummonersInTournamnet);
      return (
        <div>
          <input
              placeholder="Type tournament name"
                value={this.state.tournamentName}
                onChange={this.handleTournamentNameChange}
              autoFocus={true}
          />
          <h3>Summoner in Tournament</h3>
          <ul>{ summonersInTournamnet }</ul>
          <input
              placeholder="Type summoner name"
                value={this.state.summonerName}
                onChange={this.handleSummonerNameFieldChange}
                onBlur={this.searchSummoner}
                onKeyDown={this.handleKeyDown}
              autoFocus={true}
          /> 

          <button onClick={this.handleSaveTournament}>Save Tournament</button>
        </div>
      );
    }
});


function getSummonersInTournamnet(summonerId){
      return (
        <li>
          <Summoner id={summonerId} />
        </li> 
    );

}

module.exports = TournamentCreate;
