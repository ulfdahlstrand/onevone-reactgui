/**
 * Copyright 2014, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';
var request = require('request');

module.exports = {
    name: 'tournament',
    // at least one of the CRUD methods is required
    read: function(req, resource, params, config, callback) {
        setTimeout(function () {
            var url = 'http://localhost:5000/public_client_api/tournament/' + params.tournamentId;
            request(url, function (error, response, body) {     
                if (!error && response.statusCode === 200) {
                    var res = JSON.parse(body);
                    if(callback){ 
                        callback(null, res);
                    }
                }
                else{
                    console.log(error);
                }
            });  
        }, 10);
    },
    create: function(req, resource, params, body, config, callback) { 
        setTimeout(function () {
  
            var url = 'http://localhost:5000/public_client_api/tournament/create';
            var body = {'tournamentName': params.name, 'summoners': params.summoners};
            request.post({url:url, form: body}, function (error, response, body) {     
                if (!error && response.statusCode === 200) {
                    var res = JSON.parse(body);
                    if(callback){ 
                        callback(null, res);
                    }
                }
                else{
                    console.log(error);
                }
            }); 
        }, 10);
    }
    // update: function(resource, params, body, config, callback) {},
    // delete: function(resource, params, config, callback) {}

};
