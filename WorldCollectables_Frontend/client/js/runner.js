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
    },
    'register': {
        'controller':'registerController.js'
    }
};

Runner.run = function () {
    var appName = $('app').attr('name');
    require(['/js/' + appInfo[appName].controller], function (controller) {
        var appController = new controller();
        console.log('Invoke method start of controller');
        appController.start();
    });
};


