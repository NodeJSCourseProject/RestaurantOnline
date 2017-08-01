const { Router } = require('express');
const passport = require('passport');

const attachTo = (app, data) => {
    const router = new Router();
    const controller = require('./controller').init(data);

    router
        .get('/about', (req, res) => {
            return controller.getInfo(req, res);
        });

    app.use('/about', router);
};

module.exports = { attachTo };
