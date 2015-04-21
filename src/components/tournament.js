'use strict';
var React = require('react');
var Router = require('react-router');
var Navigation = Router.Navigation;
var request = require('superagent');
var apiBaseUrl = 'https://onevone-demo.herokuapp.com'  || 'http://localhost:5000';

var MatchListItem = require('./matchListItem');
var Summoner = require('./summoner');

var SummonerTournaments = React.createClass({
    mixins: [Navigation],
    getInitialState: function(){
        return { 
          tournament: null,
          tournamentId: null,
          tournamentName: '',
          tournamentStarted: false,
          summonersInTournamnet:[],
          summonerName: '',
          matches:[]
        };
    }, 
    componentDidMount: function(e){
      var self = this;
      this.setState({
        tournamentId: this.props.params.id
      });

      request
        .get(apiBaseUrl + '/public_client_api/tournament/'+ this.props.params.id)
        .end(function(err, res){
          var tournament = res.body;
          if(tournament && !err){
            var tournamentStarted = false;
            if(tournament.startedDate){
              tournamentStarted = true;
            }

            self.setState({
              tournament: tournament, 
              tournamentName: tournament.name,
              summonersInTournamnet: tournament.summonerIds,
              matches: tournament.matches,
              tournamentStarted: tournamentStarted
            });
          }
        });
    },
    render: function() {
      var matchesListItems = this.state.matches.map(getMatchesListItem);
      var summonersInTournamnet = this.state.summonersInTournamnet.map(getSummonersInTournamnet);
      return (
        <div className='col-md-12'>
          <h2>{ this.state.tournamentName }</h2>

          <div className='list-box col-md-4'>
            <div className='header'>
              <div className='list-header-text'>Summoners in tournament</div>  
            </div>
            <div className='content'>
              <div className='list-header-arrow arrow-down'></div>
              <div className='list-content-text'>
                <ul>
                  { summonersInTournamnet }
                </ul>
              </div>
            </div>
          </div>


          <div className='list-box col-md-4'>
            <div className='header'>
              <div className='list-header-text'>Matches in tournament</div>  
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

function getMatchesListItem(match) {
    return (
        <MatchListItem key ={match._id} match={match}/>
    );
}

function getSummonersInTournamnet(summonerId){
      return (
        <li><Summoner id={summonerId} /></li>
    );

}

module.exports = SummonerTournaments;
