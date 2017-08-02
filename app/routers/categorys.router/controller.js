class CategorysController {
    constructor(data) {
        this.data = data;
    }

    getAll(req, res) {
        return this.data.categorys.getAll()
            .then((categories) => {
                return res.render('categorys', {
                    context: categories,
                });
            });
    }
}

const init = (data) => {
    return new CategorysController(data);
};

module.exports = { init };