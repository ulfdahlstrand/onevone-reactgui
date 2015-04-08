'use strict';
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Summoner = require('./summoner');

var matchListItem = React.createClass({
    getInitialState: function(){
        return { 
          summonerIds: []
        };
    },
    componentDidMount: function(e){
      this.setState({
        summonerIds: this.props.match.summonerIds,
        tournamentName: this.props.match.name,
        winners: this.props.match.winners,
        losers:this.props.match.losers,
      });
    },
    render: function() {
      var firstCompetitor = this.state.summonerIds[0];
      var secondCompetitor = this.state.summonerIds[1];

      if(firstCompetitor && secondCompetitor){
        return (
          <li>
            <Summoner id={firstCompetitor} winners={this.state.winners} losers={this.state.losers} /> 
            <span> vs </span> 
            <Summoner id={secondCompetitor} winners={this.state.winners} losers={this.state.losers}/> 
          </li>
        );
      }
      else{
        return (
          <li>
            <span>{ firstCompetitor }</span> <span> vs </span> <span>{ secondCompetitor }</span> 
          </li>
        );
      }
    }
});

module.exports = matchListItem;
