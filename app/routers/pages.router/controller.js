'use strict';

class PageController {
    getHome (req, res) {
        return Promise.resolve()
            .then(() => {
                res.render('home');
            });
    }

    getMenu (req, res) {
        return Promise.resolve()
            .then(() => {
                res.render('menu');
            });
    }

    getMenuForms (req, res) {
        return Promise.resolve()
            .then(() => {
                res.render('menu');
            });
    }

    getOrders (req, res) {
        return Promise.resolve()
            .then(() => {
                res.render('orders');
            });
    }

    getProfile (req, res) {
        return Promise.resolve()
            .then(() => {
                res.render('user.profile.pug');
            });
    }
}

const init = () => {
    return new PageController();
};

module.exports = { init };