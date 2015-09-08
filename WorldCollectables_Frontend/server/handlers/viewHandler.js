/**
 * Created by churmuzache on 9/8/15.
 */
var configuration = require('../../resources/configuration.json'),
    fs=require('fs'),
    url = require('url'),
    path = require('path'),
    Promise = require('promised-io/promise');

function route(request, response) {
    var path = url.parse(request.url).pathname,
        views = configuration.handler.views;
        path = path.split('.')[0];  //if the url is /home.html

    if(views[path]) {
        console.log('Page found for path '+path);
        handle(request, response, path);
    } else {
        console.log('Serve not found page');
        serveNotFoundPage(response);
    }
}

function handle(request,response, pathOfPage) {
    var page = configuration.handler.views[pathOfPage],
        htmlDir = path.join(process.cwd(),'../client/html');
    var pagePath = path.join(htmlDir,page);
    fs.exists(pagePath, function(exists) {
       if(exists) {
           fs.readFile(pagePath, 'utf8', function (err, data) {
               if (err) {
                   serveNotFoundPage(response);
               } else {
                   servePage(data, response);
               }
           });
       }
    });

}

function servePage(data, response) {
    if(!response.finished) {
        response.writeHead(200, {
            'Content-Length':data.length,
            'Content-Type':'text/html'
        });
        response.end(data);
    }
}

function serveNotFoundPage(response) {
    if(!response.finished) {
        var data = 'Page not found!';
        response.writeHead(404,{
            'Content-Length':data.length,
            'Content-Type':'text/html'
        });
        response.end(data);
    }
}

exports.route=route;