'use strict';
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Summoner = require('./summoner');

var matchListItem = React.createClass({
    getInitialState: function(){
        return { 
          summonerIds: [],
          tournamentName: '',
          winners: [],
          losers: []

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
      var circle =getCircleIcon(this.state.winners);
      console.log(circle);
      if(firstCompetitor && secondCompetitor){
        return (
          <li>
            <Summoner id={firstCompetitor} winners={this.state.winners} losers={this.state.losers} /> 
            { circle }
            <Summoner id={secondCompetitor} winners={this.state.winners} losers={this.state.losers}/> 
          </li>
        );
      }
      else{
        return (
          <li>
            <div className='text left'>{ firstCompetitor }</div>
            { circle }
            <div className='text right'>{ secondCompetitor }</div>
          </li>

        );
      }
    }
});

function getCircleIcon(winners) {
    if(winners && winners.length > 0){
      return (
         <div className='circle'><div className='thropty'></div></div> 
      );

    }else{
      return (
        <div className='circle'><p>vs</p></div> 
      );
    }

}

module.exports = matchListItem;
