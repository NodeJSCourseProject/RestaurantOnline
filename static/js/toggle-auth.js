const login = $("#login")
const register = $("#register");
const loginNav = $('#loginNav');
const registerNav = $('#registerNav')
const toggleToRegister = $('#toggleToRegister');
const toggleToLogin = $('#toggleToLogin');

login.toggle();
register.toggle();

loginNav.click(() => {
    login.toggle();
    register.hide();
});

registerNav.click(() => {
    register.toggle();
    login.hide();
});

toggleToRegister.click(() => {
    $("#register").toggle(); 
    $("#login").hide();
});

toggleToLogin.click(() => {
    $("#login").toggle(); 
    $("#register").hide();
});

// $("#register").hide();
// .hide();

// $("#login").click(() => {
//     $("#login").toggle(); 
//     $("#register").hide();
// });

// $('#register').click(() => {
//     $("#register").toggle(); 
//     $("#login").hide();
// });
