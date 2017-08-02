const { Router } = require('express');

const attachTo = (app, data) => {
    const router = new Router();
    const controller = require('./controller').init(data);

    router
        .get('/form', (req, res) => {
            //console.log(req.user);
            if (!req.user) {
                return Promise.resolve()
                    .then(() => {
                        res.redirect('/home');
                    });
            }

            return controller.getForm(req, res);
        })
        .post('/add', (req, res) => {
            if (!req.user) {
                return Promise.resolve()
                    .then(() => {
                        res.redirect('/home');
                    });
            }

            return controller.create(req, res);
        });

    app.use('/orders', router);
};

module.exports = { attachTo };