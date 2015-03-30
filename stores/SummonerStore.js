'use strict';
var createStore = require('fluxible/addons').createStore;

var SummonerStore = createStore({
    storeName: 'SummonerStore',
    handlers: {
        'SET_CURRENT_SUMMONER': '_handleSetCurrentSummoner'
    },
    initialize: function () {
        this.currentSummonerName = null;
        this.currentSummonerId = null;
    },
    _handleSetCurrentSummoner: function (summoner) {
        console.log(summoner);
        this.currentSummonerName = summoner.name;
        this.currentSummonerId = summoner.id;

        this.emitChange();
    },
    dehydrate: function () {
        return {
            currentSummonerName: this.currentSummonerName,
            currentSummonerId: this.currentSummonerId
        };
    },
    rehydrate: function (state) {
        this.currentSummonerName = state.currentSummonerName;
        this.currentSummonerId = state.currentSummonerId;
    }
});

module.exports = SummonerStore;
