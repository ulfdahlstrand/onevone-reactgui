'use strict';
var React = require('react');
var Router = require('react-router');
var Navigation = Router.Navigation;
var request = require('superagent');
var _ = require('underscore');
var services = require('./../services');

var Summoner = require('./summoner');

var ENTER_KEY = 13;

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
      services.searchSummoner(this.state.summonerName, function(summoner){
          if(summoner){
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
      var tournament = {
        'tournamentName': this.state.tournamentName, 
        'summoners': this.state.summonersInTournamnet
      };
      services.createTournament(tournament, function(createdtournament){
        self.startTournament(createdtournament._id);
      });
    },
    startTournament: function(tournamentId){
      var self = this;
      services.startTournament(tournamentId, function(){
        self.transitionTo('tournament',{ id: tournamentId });
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
