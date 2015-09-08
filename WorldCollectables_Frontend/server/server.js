/**
 * The main file that will start the server of this application
 *
 * Created by churmuzache on 9/8/15.
 */
var http = require('http'),
    serverConfig = require('../resources/server_config.json'),
    profile = process.env.NODE_ENV || "localhost";

var handlers = {
    'html' : require('./handlers/viewHandler')
    //TODO for others
};


function start() {
    http.createServer(function(request, response) {
        handleRequestResponse(request,response);
    }).listen(serverConfig[profile].port,serverConfig[profile].host);
    console.log('Server has started on port '+serverConfig[profile].port+' and host:'+serverConfig[profile].host);
}

function handleRequestResponse(request, response) {
    var isControllerHandler = request.url.indexOf('/controller') != -1;

    if(isControllerHandler) {
        handlers['controller']
    } else {    //The default case
        console.log('HTML page found');
        handlers['html'].route(request, response);
    }
}

start();