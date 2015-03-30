'use strict';
/** 
 * Automated inclusion of services with Fluxible
 * 
 * The services are used on the server side as a resource. They fetch
 * an endpoint and return the data. Right now for each resource, you
 * need to manually include the file. 
 * 
 * The code sample needs to be placed in the /services/ directory of
 * your application - and be named index.js. To register all your
 * services, all you have to do:
 * 
 * var services = require('./services');
 * services.activate(app, server);
 * 
 * @see github.com/yahoo/fluxible-app/
 */
 
var fs = require('fs');
var bodyParser = require('body-parser');
 
 
/** 
 * Fetch all the services available and attach them to the application.
 * 
 * @param {Fluxible-App} app The fluxible application
 * @param {Express} server The express server.
 */
module.exports = {
    activate: function(app, server) {
        var fetchrPlugin = app.getPlugin('FetchrPlugin');
        var files = fs.readdirSync(__dirname);
        files.forEach(function(file) {
            if (file === 'index.js') {
                return;
            }
            fetchrPlugin.registerService(require(__dirname + '/' + file));
        });
 
        server.use(bodyParser.json());
        server.use(fetchrPlugin.getXhrPath(), fetchrPlugin.getMiddleware());
    }
};