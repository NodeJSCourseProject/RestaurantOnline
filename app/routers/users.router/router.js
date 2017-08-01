"use strict";
const { Router } = require('express');
const passport = require('passport');

const attachTo = (app, data) => {
    const router = new Router();
    const controller = require('./controller').init(data);

    router
        // .get('/', (req, res) => {
        //     return controller.getAccount(req, res);
        // })
        .post('/', (req, res) => {
            return controller.postUpdateProfile(req, res);
        })
        .post('/password', (req, res) => {
            return controller.postUpdatePassword(req, res);
        })
        .post('/deleted', (req, res) => {
            return controller.postDeleteAccount(req, res);
        })
        .post('/sign-in', passport.authenticate('local', {
            successRedirect: '/meals/form',
            failureRedirect: '/auth/sign-up',
            failureFlash: true,
        }));

    app.use('/profile', router);
};

module.exports = { attachTo };

