/**
 * The main file that will start the server of this application
 *
 * Created by churmuzache on 9/8/15.
 */
var http = require('http'),
    serverConfig = require('../resources/server_config.json'),
    profile = process.env.NODE_ENV || "localhost";

var handlers = {
    'html': require('./handlers/viewHandler'),
    'js' : require('./handlers/jsHandler'),
    'controller' : require('./handlers/controllerHandler'),
    'css' : require('./handlers/cssHandler')
    //TODO for others
};


function start() {
    http.createServer(function (request, response) {
        handleRequestResponse(request, response);
    }).listen(serverConfig[profile].port, serverConfig[profile].host);
    console.log('Server has started on port ' + serverConfig[profile].port + ' and host:' + serverConfig[profile].host);
}

function handleRequestResponse(request, response) {
    console.log(request.url);
    var isControllerHandler = request.url.indexOf('/controller') != -1;
    var isJs = request.url.indexOf('.js') != -1;
    var isCss = request.url.indexOf('.css') != -1;

    if (isControllerHandler) {
        handlers['controller'].route(request, response);
    } else if (isJs) {
        handlers['js'].route(request, response);
    } else if(isCss) {
        handlers['css'].route(request, response);
    } else {    //The default case
        handlers['html'].route(request, response);
    }
}

start();