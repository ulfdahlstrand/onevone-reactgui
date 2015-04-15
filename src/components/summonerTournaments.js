'use strict';
var React = require('react');
var Router = require('react-router');
var Navigation = Router.Navigation;
var request = require('superagent');
var apiBaseUrl = process.env.APIBASEURL || 'http://localhost:5000';

var TournamentListItem = require('./tournamentListItem');

var SummonerTournaments = React.createClass({
    mixins: [Navigation],
    getInitialState: function(){
        return { 
          tournaments: []
        };
    },
    componentDidMount: function(e){
      var self = this;
      request
        .get(apiBaseUrl + '/public_client_api/summoner/'+ this.props.params.id +'/tournaments')
        .end(function(err, res){
          var tournaments = res.body;
          if(tournaments && !err){
            self.setState({tournaments: tournaments});
          }
        });
    },
    render: function() {
        var matchesListItems = this.state.tournaments.map(getTournamentListItem);
        return (
          <ul>
            { matchesListItems}
          </ul>
        );
    }
});

function getTournamentListItem(tournament) {
    return (
        <TournamentListItem key ={tournament._id} tournament={tournament}/>
    );
}

module.exports = SummonerTournaments;
