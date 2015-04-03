'use strict';
var React = require('react');
var FluxibleMixin = require('fluxible').FluxibleMixin;

var SearchSummoner = require('./SearchSummoner.jsx');
var CreateTournament = require('../actions/CreateTournament');
var SummonerStore = require('../stores/SummonerStore');
var Tournament = React.createClass({
    mixins: [FluxibleMixin],
    statics: {
        storeListeners: [SummonerStore]
    },    
    getInitialState: function () {
        return {
            tournamentId :null,
            tournamentName: null,
            summoners:[]
        };
    },
    onChange: function () {
        var store = this.getStore(SummonerStore);
        if(store.currentSummoner){
            console.log(store.currentSummoner.name);
            this.state.summoners.push(store.currentSummoner.id);
        }  
    },
    handleCreateTournament: function (event) {
        var tournamentName = this.refs.tournamentNameField.getDOMNode().value.trim();

        if(tournamentName){
            this.executeAction(CreateTournament, {
                name: tournamentName,
                summoners: this.state.summoners
            });
        }
    },
    render: function() {

        return (
        	<div>
                <h2>Create a new tournament</h2>
                <input
                    ref="tournamentNameField"
                    id="tournament-name"
                    placeholder="Enter a name for your tournament"
                   // onKeyDown={this.handleNewTodoKeyDown}
                    autoFocus={true} /> 
                <SearchSummoner />  
                <button type="button" onClick={this.handleCreateTournament}>Create tournament</button>
            </div>
        );
    }
});

module.exports = Tournament;
