'use strict';
var createStore = require('fluxible/addons').createStore;

var SummonerStore = createStore({
    storeName: 'SummonerStore',
    handlers: {
        'SET_CURRENT_SUMMONER': '_handleSetCurrentSummoner',
        'ADD_SUMMONER':'_handleAddSummoner'
    },
    initialize: function () {
        this.currentSummoner = null;
        this.summoners = [];
    },
    _handleAddSummoner: function(summoner){
        this.AddSummonerData(summoner);
        this.emitChange();
    },
    _handleSetCurrentSummoner: function (summoner) {
        this.currentSummoner = summoner;
        this.AddSummonerData(summoner);
        this.emitChange();
    },
    AddSummonerData: function(summoner){
        this.summoners[summoner.id] = summoner;
    },
    dehydrate: function () {
        return {
            currentSummoner: this.currentSummoner
        };
    },
    rehydrate: function (state) {
        this.currentSummoner = state.currentSummoner;
    }
});

module.exports = SummonerStore;
