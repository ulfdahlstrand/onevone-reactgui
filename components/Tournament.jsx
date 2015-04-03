'use strict';
var TournamentStore = require('../stores/TournamentStore');
var GetTournament = require('../actions/GetTournament');
var TournamentListItem = require('../components/TournamentListItem');
var React = require('react');
var FluxibleMixin = require('fluxible').FluxibleMixin;

function getMatchesListItem(match) {
    return (
        <TournamentListItem key ={match.gameId} match={match}/>
    );
}

var Tournament = React.createClass({ 
    mixins: [FluxibleMixin],
    statics: {
        storeListeners: [TournamentStore]
    },   
    getInitialState: function () {
        return {
            tournamentId :null,
            tournamentName: null,
            matches: []
        };
    },
    onChange: function () {
        var store = this.getStore(TournamentStore);
        this.setState({tournamentName: store.currentTournament.name, matches: store.currentTournament.matches});
    },
    componentDidMount: function() {
        this.state.tournamentId = this.props.tournamentId;
        this.executeAction(GetTournament, {
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
