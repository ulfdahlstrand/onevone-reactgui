/**
 * Copyright 2014, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';

module.exports = function (context, payload, done) {
   context.service.create('tournament', payload, {}, function (err, tournament) {
    	if(tournament){
    		context.dispatch('SET_CURRENT_TOURNAMENT', tournament);
    	}
    	done();
    });
};
