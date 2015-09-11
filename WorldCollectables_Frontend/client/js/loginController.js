/**
 * Created by churmuzache on 9/11/15.
 */
define([], function () {

    function LoginController() {

    }

    LoginController.prototype.start = function () {
        console.log('Inside login Controller');
        $('#login-button').on('click', function () {
            var userName = $('#login-container-u').val();
            var password = $('#login-container-p').val();

            console.log(userName + ',' + password);
        });
    };

    return LoginController;
});