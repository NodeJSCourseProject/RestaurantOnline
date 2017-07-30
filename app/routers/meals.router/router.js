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
                        res.redirect('/auth/sign-in');
                    });
            }

            return controller.getForm(req, res);
        })
        .get('/:_id', (req, res) => {
            // if (!req.user) {
            //     return Promise.resolve()
            //         .then(() => {
            //             req.flash(
            //                 'err',
            //                 { message: 'You need authentication' }
            //             );

            //             res.redirect('/auth/sign-in');
            //         });
            // }
            return controller.getAll(req, res);
        })
        .post('/form', (req, res) => {
            // console.log('post info---')
            // console.log(req.body);
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