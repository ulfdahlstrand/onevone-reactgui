'use strict';
var React = require('react');
var Router = require('react-router');
var Navigation = Router.Navigation;
var request = require('superagent');
var apiBaseUrl = 'https://onevone-demo.herokuapp.com'  || 'http://localhost:5000';

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
          <div className='col-md-12'>
          
            <div className='list-box col-md-4'>
              <div className='header'>
                <h2>Tournaments</h2>  
              </div>
              <div className='content'>
                <div className='list-header-arrow arrow-down'></div>
                <div className='list-content-text'>
                  <ul>
                    { matchesListItems }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
    }
});

function getTournamentListItem(tournament) {
    return (
        <TournamentListItem key ={tournament._id} tournament={tournament}/>
    );
}

module.exports = SummonerTournaments;
