class MealsController {
    constructor(data) {
        this.data = data;
    }

    getAll(req, res) {
        const categoryId = req.params._id.slice(1);
        return this.data.categorys.getCategoryMeals(categoryId)
            .then((meals) => {
                return res.render('meals/all', {
                    context: meals || [],
                });
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
                console.log('***');
                console.log('dbMeal:');
                console.log(dbMeal);
                dbCategory.name = meal.category;
                dbCategory.meals = dbCategory.meals || [];
                const meal1 = {};
                meal1._id = dbMeal.ops[0]._id;
                meal1.name = dbMeal.ops[0].name;
                meal1.description = dbMeal.ops[0].description;
                meal1.weight = dbMeal.ops[0].weight;
                meal1.price = dbMeal.ops[0].price;
                meal1.picture = dbMeal.ops[0].picture;
                
                dbCategory.meals.push(
                    meal1

                );

                dbMeal.category = {
                    _id: dbCategory._id,
                    name: dbCategory.name,
                };

                console.log('dbCat:');
                console.log(dbCategory);

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