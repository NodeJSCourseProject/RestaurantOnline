const { Router } = require('express');

const attachTo = (app, data) => {
    const router = new Router();
    //const controller = require('./controller').init(data);

    router
        .get('/search', (req, res) => {
            const meal = req.query.search;
            data.meals.filterBy({name: meal})
                .then((m) => {
                    res.render('menu', { meals: m });
                });
        });

    app.use('/menu', router);
};

module.exports = { attachTo };