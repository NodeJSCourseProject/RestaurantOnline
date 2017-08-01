const { Router } = require('express');
const passport = require('passport');

const attachTo = (app, data) => {
    const router = new Router();
    const controller = require('./controller').init(data);

    router
        .get('/sign-up', (req, res) => {
            return controller.getSignUpForm(req, res);
        })
        .get('/sign-in', (req, res) => {
            return controller.getSignInForm(req, res);
        })
        .get('/sign-out', (req, res) => {
            return controller.signOut(req, res);
        })
        .post('/sign-out', (req, res) => {
            return controller.signOut(req, res);
        })
        .post('/sign-up', (req, res) => {
            // console.log('*/*');
            // console.log(req);

            return controller.signUp(req, res);
        })
<<<<<<< HEAD
        .post('/sign-in', passport.authenticate('local', {
            successRedirect: '/home',
=======
        .post('/sign-in',
        passport.authenticate('local', {
            successRedirect: '/categorys',
>>>>>>> 7fc5c8be3ebb9fb88ebb9d20c810efb74a09ca5f
            failureRedirect: '/auth/sign-up',
            failureFlash: true
        }))

    app.use('/auth', router);
};

module.exports = { attachTo };

// Questions
// how to choose category
// where and how to update the category