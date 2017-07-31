'use strict';

class PageController {
    constructor() {
        this._viewPath = '../../../views/';
    }

    getHome (req, res) {
        return res.render('home');
    }

    getMenu (req, res) {
        return res.render('menu');
    }

    getMenuForms (req, res) {
        return res.render('menu');
    }

    getOrders (req, res) {
        return res.render('orders');
    }

    getProfile (req, res) {
        return res.render('user.profile.pug');
    }
}

const init = () => {
    return new PageController();
};

module.exports = { init };