/**
 * Copyright 2014, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';

module.exports = function (context, payload, done) {
    context.service.read('summoner', payload, {}, function (err, summoner) {
    	if(summoner){
    		context.dispatch('ADD_SUMMONER', summoner);
    	}
    	done();
    });
};
