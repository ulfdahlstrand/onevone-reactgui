/**
 * Copyright 2014, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';
var SummonerStore = require('../stores/SummonerStore');


module.exports = function (context, payload, done) {
    var summonerStore = context.getStore(SummonerStore);
    context.service.read('summoner', payload, {}, function (err, summoner) {
    	if(summoner){
    		summonerStore._handleSetCurrentSummoner(summoner);
    		//context.dispatch('FOO_ACTION', payload);
    	}
    	
    	done();
    });


};
