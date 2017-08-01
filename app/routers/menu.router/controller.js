class MenuController {
    constructor(data) {
        this.data = data;
    }

    searchOne(req, res) {
        const meal = req.query.search;
        this.data.meals.filterBy({name: meal})
            .then((m) => {
                res.render('menu', { meals: m });
        });
    }
}

const init = (data) => {
    return new MenuController(data);
};

module.exports = { init };