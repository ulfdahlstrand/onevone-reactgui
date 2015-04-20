'use strict';
var React = require('react');
var Router = require('react-router');
var Navigation = Router.Navigation;
var request = require('superagent');
var _ = require('underscore');
var apiBaseUrl = 'https://onevone-demo.herokuapp.com'  || 'http://localhost:5000';

var SummonerTournaments = React.createClass({
    mixins: [Navigation],
    getInitialState: function(){
        return { 
          summoner: null,
          summonerId: '',
          summonerName: '',
          winners: [],
          losers: []
        };
    },
    componentDidMount: function(e){
      var self = this;

      self.setState({
        summonerId: this.props.id,
        winners: this.props.winners,
        losers: this.props.losers
      });

      request
        .get(apiBaseUrl + '/public_client_api/summoner/'+ this.props.id)
        .end(function(err, res){
          var summoner = res.body;
          if(summoner && !err){
            self.setState({
              summoner: summoner, 
              summonerName: summoner.name
            });
          }
        });
    },
    render: function() {
      var classForSummoner = getClassForSummoner(this.state);
      return (
        <div className={classForSummoner}>{ this.state.summonerName }</div>
      );
    }
});

function getClassForSummoner(state){
  var classForSummoner = 'text unplayed';

  if(_.contains(state.winners, state.summonerId)){
    classForSummoner = 'text winner';
  }else if(_.contains(state.losers, state.summonerId)){
    classForSummoner = 'text loser';
  }
  return classForSummoner;
}

module.exports = SummonerTournaments;
