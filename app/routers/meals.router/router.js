const { Router } = require('express');

const attachTo = (app, data) => {
    const router = new Router();
    const controller = require('./controller').init(data);

    router
        .get('/form', (req, res) => {
            if (!req.user) {
                return Promise.resolve()
                    .then(() => {
                        res.redirect('/auth/sign-in');
                    });
            }

            return controller.getForm(req, res);
        })
        .get('/:_id', (req, res) => {
            console.log('req.params:');
            console.log(req.params);
            return controller.getAll(req, res);
        })
        .post('/form', (req, res) => {
            if (!req.user) {
                return Promise.resolve()
                    .then(() => {
                        res.redirect('/auth/sign-in');
                    });
            }

            return controller.create(req, res);
        });

    app.use('/meals', router);
};

module.exports = { attachTo };