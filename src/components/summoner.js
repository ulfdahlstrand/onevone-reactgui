'use strict';
var React = require('react');
var Router = require('react-router');
var Navigation = Router.Navigation;
var request = require('superagent');
var _ = require('underscore');
var apiBaseUrl = process.env.APIBASEURL || 'http://localhost:5000';

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
        <span className={classForSummoner}>{ this.state.summonerName }</span>
      );
    }
});

function getClassForSummoner(state){
  var classForSummoner = 'unplayed';

  if(_.contains(state.winners, state.summonerId)){
    classForSummoner = 'winner';
  }else if(_.contains(state.losers, state.summonerId)){
    classForSummoner = 'loser';
  }
  return classForSummoner;
}

module.exports = SummonerTournaments;
