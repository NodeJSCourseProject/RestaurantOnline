const $ = require('jquery');

const authToggle = () => {
    $("#register").hide();
    $("#login").hide();

    $('#loginNav').click(() => {
        $("#login").toggle();
        $("#register").hide();
    });

    $('registerNav').click(() => {
        $("#register").toggle(); 
        $("#login").hide();
    });
}

module.exports = authToggle;