'use strict';
var TournamentStore = require('../stores/TournamentStore');
var getTournament = require('../actions/GetTournament');
var TournamentListItem = require('../components/TournamentListItem');
var React = require('react');
var FluxibleMixin = require('fluxible').FluxibleMixin;

function getMatchesListItem(match) {
    return (
        <TournamentListItem matchId={match}/>
    );
}

var Tournament = React.createClass({ 
    mixins: [FluxibleMixin],
    statics: {
        storeListeners: [TournamentStore]
        
    },   
    getInitialState: function () {
        return {
            tournamentId :'54fa433dd8bbc8e48a0c946b',
            tournamentName: null,
            matches: []
        };
    },
    onChange: function () {
        var store = this.getStore(TournamentStore);
        this.setState({tournamentName: store.currentTournament.name, matches: store.currentTournament.matches});
    },
    componentDidMount: function() {
        this.executeAction(getTournament, {
            tournamentId : this.state.tournamentId   
        });
        
    },
    render: function() {
        var matchesListItems = this.state.matches.map(getMatchesListItem);
        return (
        	<div>
                <h2>Tournament</h2>
                <p>{this.state.tournamentName}</p>
                <ul>
                    {matchesListItems}
                </ul>

            </div>
        );
    }
});

module.exports = Tournament;
