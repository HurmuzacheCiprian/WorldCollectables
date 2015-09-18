/** This module is used to read images
 *
 * Created by cipriach on 18.09.2015.
 */

var path = require('path'),
    fs = require('fs'),
    url = require('url');

function route(request, response) {
    var resourcePath = path.join(process.cwd(),'../');
    var imagePath = path.join(resourcePath,request.url);

    fs.exists(imagePath, function (exists) {
        if (exists) {
            fs.readFile(imagePath, function (err, data) {
                if (err) {
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

function servePage(content, response) {
    if(!response.finished) {
        response.writeHead(200, {'Content-Length': content.length, 'Content-Type': 'image'});
        response.end(content);
    }
}

function serveNotFoundPage(response) {
    //you can define some error pages 404.html, 500.html......
    if(!response.finished) {
        var data = 'Page not found';
        response.writeHead(404, {'Content-Length': data.length, 'Content-Type': 'text/html'});
        response.end(data);
    }
}

exports.route=route;