/**
 * Created by churmuzache on 9/11/15.
 */
define([], function () {

    function LoginController() {

    }

    LoginController.prototype.start = function () {
        console.log('Inside login Controller');
        $('#login-button').on('click', function () {
            var email = $('#email').val();
            var password = $('#pwd').val();

            console.log(email + ',' + password);
        });
    };

    return LoginController;
});