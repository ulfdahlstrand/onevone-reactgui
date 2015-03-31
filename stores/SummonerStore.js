'use strict';
var createStore = require('fluxible/addons').createStore;

var SummonerStore = createStore({
    storeName: 'SummonerStore',
    handlers: {
        'SET_CURRENT_SUMMONER': '_handleSetCurrentSummoner'
    },
    initialize: function () {
        this.currentSummoner= null;
    },
    _handleSetCurrentSummoner: function (summoner) {
        console.log(summoner);
        this.currentSummoner = summoner;

        this.emitChange();
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
