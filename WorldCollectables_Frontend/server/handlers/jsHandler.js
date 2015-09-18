/**
 * Module used to load js resources
 *
 * Created by churmuzache on 9/9/15.
 */
var path = require('path'),
    fs = require('fs'),
    url = require('url');

function route(request, response) {
    var path = url.parse(request.url).pathname;
    handle(path, response);
}

function handle(pagePath, response) {
    var jsDir = path.join(process.cwd(), '../client');
    var jsPath = path.join(jsDir, pagePath);
    fs.exists(jsPath, function (exists) {
        if (exists) {
            fs.readFile(jsPath, 'utf-8', function (error, data) {
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
            'Content-Type': 'application/javascript'
        });
        response.end(data);
    }
}

function serveNotFoundPage(response) {
    if (!response.finished) {
        var data = 'Page not found!';
        response.writeHead(404, {
            'Content-Length': data.length,
            'Content-Type': 'text/javascript'
        });
        response.end(data);
    }
}

exports.route = route;