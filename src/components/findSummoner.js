'use strict';
var React = require('react');
var Router = require('react-router');
var Navigation = Router.Navigation;
var services = require('./../services');
var ENTER_KEY = 13;
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
      services.searchSummoner(this.state.summonerName, function(summoner){
        self.transitionTo('summonerTournaments',{ id: summoner.id });
      });
    },
    render: function() {
        return (
          <div>
              <div className='col-md-6 col-md-offset-3'>
                <img id='logo' src='/public/images/LOLVERSUS_logo_NEG.png'/>
              </div>

              <div className='col-md-4 col-md-offset-4'>
                <input
                    placeholder="Type summoner name"
                      value={this.state.summonerName}
                      onChange={this.handleInputChange}
                      onBlur={this.searchSummoner}
                      onKeyDown={this.handleKeyDown}
                    autoFocus={true}
                    className = "col-md-12"
                /> 
              </div>
          </div>);
    }
});

module.exports = FindSummoner;
