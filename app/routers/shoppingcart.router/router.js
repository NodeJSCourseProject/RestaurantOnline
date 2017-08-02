const { Router } = require('express');

const attachTo = (app, data) => {
    const router = new Router();
    const controller = require('./controller').init(data);

    router
        .get('/form', (req, res) => {
            if (!req.user) {
                return Promise.resolve()
                    .then(() => {
                        res.redirect('/home');
                    });
            }

            return controller.getForm(req, res);
        })
        .post('/eraseall', (req, res) => {
            return controller.eraseAll(req, res);
        })
        .post('/add/:_id', (req, res) => {
            if (!req.user) {
                return Promise.resolve()
                    .then(() => {
                        res.redirect('/home');
                    });
            }

            return controller.addMeals(req, res);
        });

    app.use('/shoppingcart', router);
};

module.exports = { attachTo };