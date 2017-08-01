const { Router } = require('express');

const attachTo = (app, data) => {
    const router = new Router();
    const controller = require('./controller').init(data);

    router
        .get('/search', (req, res) => {
            return controller.searchOne(req, res);
        });

    app.use('/menu', router);
};

module.exports = { attachTo };