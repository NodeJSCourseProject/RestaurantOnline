'use strict';
const { Router } = require('express');  
    
const attachTo = (app) => {
    const router = new Router();
    const controller = require('./controller').init();

    // router
    //     .get('/home', (req, res) => {
    //         console.log('TEST loaded');
    //         res.render('home');
    //     })
    //     .get('/menu', (req, res) => {
    //         console.log('Menu loaded');
    //         res.render('menu');
    //     })
    //     .get('/menu/forms', (req, res) => {
    //         res.render('menu'); // relative route, no need for ./all
    //         // res.render('./page.not.found')
    //     })
    //     .get('/orders', (req, res) => {
    //         console.log('Orders loaded');
    //         res.render('orders');
    //     })
    //     .get('/profile', (req, res) => {
    //         console.log('Your profile');
    //         res.render('user.profile.pug');
    //     });
    router
        .get('/home', (req, res) => {
            return controller.getHome(req, res);
        })
        .get('/menu', (req, res) => {
            return controller.getMenu(req, res);
        })
        .get('/menu/forms', (req, res) => {
            return controller.getMenuForms(req, res);
        })
        .get('/orders', (req, res) => {
            return controller.getOrders(req, res);
        })
        .get('/profile', (req, res) => {
            return controller.getProfile(req, res);
        });

    app.use('/', router);
};

module.exports = { attachTo };
