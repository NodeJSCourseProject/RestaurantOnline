'use strict';
const { Router } = require('express');  
    
const attachTo = (app, data) => {
    const router = new Router();
    const controller = require('./controller').init(data);
    
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
