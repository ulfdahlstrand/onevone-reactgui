'use strict';
var React = require('react');
var Router = require('react-router');
var Navigation = Router.Navigation;
var services = require('./../services');

var Summoner = require('./summoner');

var TournamentStandings = React.createClass({
    mixins: [Navigation],
    getInitialState: function(){
        return { 
          standings: []
        };
    }, 
    componentDidMount: function(e){
      var self = this;
      this.setState({
        tournamentId: this.props.params.id
      });

      services.getStandingsForTournamentById(this.props.params.id, function(standings ){
        self.setState({
              standings: standings
            });
      });
    },
    render: function() {
      var standings = this.state.standings.map(getStandingsInTournamnet);
      return (
        <div>
          <h2>{ this.state.tournamentName }</h2>
          <h3>Standings in Tournament</h3>
          <ul>{ standings }</ul>
        </div>
      );
    }
});

function getStandingsInTournamnet(standings){
      return (
        <li>
          <Summoner id={standings.summonerId} /> 
          <span>Wins: {standings.wins} </span> 
          <span>Loses: {standings.loses} </span>
        </li>
    );

}

module.exports = TournamentStandings;
