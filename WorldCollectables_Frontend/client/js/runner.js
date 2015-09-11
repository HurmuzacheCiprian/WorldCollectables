/**
 * Created by churmuzache on 9/11/15.
 */
function Runner() {

}

var appInfo = {
    'home': {
        'controller': 'homeController.js'
    },
    'login': {
        'controller': 'loginController.js'
    }
};

Runner.run = function () {
    var appName = $('app').attr('name');
    require(['/js/' + appInfo[appName].controller], function (Controller) {
        var appController = new Controller();
        console.log('Invoke method start of controller');
        appController.start();
    });
};


