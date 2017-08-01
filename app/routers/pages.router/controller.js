'use strict';

class PageController {
    constructor(data) {
        this.data = data;
    }
    
    getHome (req, res) {
        return Promise.resolve()
            .then(() => {
                res.render('home');
            });
    }

    getMenu (req, res) {
        return this.data.meals.filterBy({})
            .then((m) => {
                res.render('menu', { meals: m });
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

const init = (data) => {
    return new PageController(data);
};

module.exports = { init };