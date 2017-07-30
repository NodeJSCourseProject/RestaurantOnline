class MealsController {
    constructor(data) {
        this.data = data;
    }

    getAll(req, res) {
        const categoryId = req.query._id;
        const meals = this.data.categorys.getCategoryMeals(categoryId);
        return res.render('meals/all', {
            context: meals || [],
        });
    }

    getForm(req, res) {
        return Promise.resolve()
            .then(() => {
                return res.render('meals/form');
            });
    }

    create(req, res) {
        const meal = req.body;

        // validate item
        const category = {
            name: meal.category,
        };

        const user = req.user;

        meal.user = {
            id: user._id,
            username: user.username,
        };

        return Promise
            .all([
                this.data.meals.create(meal),
                this.data.categorys.findOrCreateBy(category),
            ])
            .then(([dbMeal, dbCategory]) => {
                dbCategory.name = meal.category;
                dbCategory.meals = dbCategory.meals || [];
                dbCategory.meals.push({
                    _id: dbMeal._id,
                    name: dbMeal.name,
                    description: dbMeal.description,
                    weight: dbMeal.weight,
                    price: dbMeal.price,
                    picture: dbMeal.picture,
                });

                dbMeal.category = {
                    _id: dbCategory._id,
                    name: dbCategory.name,
                };

                // console.log('***');
                // console.log(dbMeal);
                // console.log(dbCategory);

                //user.todos = user.todos || [];
                // user.todos.push({
                //     _id: dbTodo._id,
                //     text: dbTodo.text,
                //     isDone: dbTodo.isDone,
                //     category: dbTodo.category,
                // });

                return Promise.all([
                    this.data.meals.updateById(dbMeal),
                    this.data.categorys.updateById(dbCategory),
                    //this.data.users.updateById(user),
                ]);
            })
            .then(() => {
                // connect-flash
                return res.redirect('/');
            })
            .catch((err) => {
                // console.log('err:');
                // console.log(err);
                req.flash('error', err);
                return res.redirect('/meals/form');
            });
    }
}

const init = (data) => {
    return new MealsController(data);
};

module.exports = { init };