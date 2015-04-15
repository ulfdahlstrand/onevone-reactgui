'use strict';
var React = require('react');
var Router = require('react-router');
var Navigation = Router.Navigation;
var request = require('superagent');
var ENTER_KEY = 13;
var apiBaseUrl = 'https://onevone-demo.herokuapp.com'  || 'http://localhost:5000';
var FindSummoner = React.createClass({
    mixins: [Navigation],
    getInitialState: function(){
        return { 
          summonerName: '', 
          summoner: null 
        };
    },
    handleInputChange: function(e){
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
            self.transitionTo('summonerTournaments',{ id: summoner.id });
          }
        });
    },
    render: function() {
        return (
          <div>
              <img id='logo' src='/public/images/LOLVERSUS_logo_NEG.png'/>
              <input
                  placeholder="Type summoner name"
                    value={this.state.summonerName}
                    onChange={this.handleInputChange}
                    onBlur={this.searchSummoner}
                    onKeyDown={this.handleKeyDown}
                  autoFocus={true}
              /> 
            </div>
        );
    }
});

module.exports = FindSummoner;
