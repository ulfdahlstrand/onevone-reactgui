'use strict';
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var SummonerTournaments = React.createClass({
    getInitialState: function(){
        return { 
          tournamentsId: '',
          tournamentName : ''
        };
    },
    componentDidMount: function(e){
      this.setState({
        tournamentsId: this.props.tournament._id,
        tournamentName: this.props.tournament.name
      });
    },
    render: function() {
      return (
        <li>
          <Link to="tournament" params={{id: this.state.tournamentsId}}>{this.state.tournamentName}</Link>
        </li>
      );
    }
});

module.exports = SummonerTournaments;
