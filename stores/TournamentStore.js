'use strict';
var createStore = require('fluxible/addons').createStore;

var SummonerStore = createStore({
    storeName: 'TournamentStore',
    handlers: {
        'SET_CURRENT_TOURNAMENT': '_handleSetCurrentTournament',
        'SET_TOURNAMENTS_FOR_SUMMONER': '_handleSetTournamentsForSummoner',
    },
    initialize: function () {
        this.currentTournament = null;
        this.tournamentsForSummoner = null;
    },
    _handleSetCurrentTournament: function (tournament) {

        this.currentTournament = tournament;

        this.emitChange();
    },
    _handleSetTournamentsForSummoner: function(summoner, tournaments){
        console.log(summoner + tournaments);
    },
    dehydrate: function () {
        return {
            currentTournament: this.currentTournament,
            tournamentsForSummoner : this.tournamentsForSummoner
        };
    },
    rehydrate: function (state) {
        this.currentTournament = state.currentTournament;
        this.tournamentsForSummoner = state.tournamentsForSummoner;
    }
});

module.exports = SummonerStore;
