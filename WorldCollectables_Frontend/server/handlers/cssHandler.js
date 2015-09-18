/**
 * Module used to load the css resources
 *
 * Created by churmuzache on 9/9/15.
 */

var path = require('path'),
    fs = require('fs'),
    url = require('url');

function route(request, response) {
    var path = url.parse(request.url).pathname;
    var pathLength = path.length - 1;
    path = path.split('/');

    handle(request, response, path[path.length - 1]);

}

function handle(request, response, pagePath) {
    var cssDir = path.join(process.cwd(), '../client/css');
    var cssPath = path.join(cssDir, pagePath);
    fs.exists(cssPath, function (exists) {
        if (exists) {
            fs.readFile(cssPath, 'utf-8', function (error, data) {
                if (error) {
                    serveNotFoundPage(response);
                } else {
                    servePage(data, response);
                }
            });
        } else {
            serveNotFoundPage(response);
        }
    });
}

function servePage(data, response) {
    if (!response.finished) {
        response.writeHead(200, {
            'Content-Length': data.length,
            'Content-Type': 'text/css'
        });
        response.end(data);
    }
}

function serveNotFoundPage(response) {
    if (!response.finished) {
        var data = 'Page not found!';
        response.writeHead(404, {
            'Content-Length': data.length,
            'Content-Type': 'text/css'
        });
        response.end(data);
    }
}


exports.route = route;