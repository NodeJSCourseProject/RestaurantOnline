class MealsController {
    constructor(data) {
        this.data = data;
    }

    getAll(req, res) {
        const categoryId = req.params._id.slice(1);
        return this.data.categorys.getCategoryMeals(categoryId)
            .then((meals) => {
                const searchProps = ['name', 'price', 'weight'];
                let searchProperty = req.query.orderby;
                if (!searchProperty) {
                    searchProperty = searchProps[0];
                }
                meals = meals || [];
                meals.sort( 
                    (a, b) =>
                     (Number(a[searchProperty]) || a[searchProperty]) >= 
                            (Number(b[searchProperty]) || b[searchProperty]) ? 1 : -1
                        );
                return res.render('meals/all', {
                    context: {
                        meals: meals,
                        searchProps: searchProps,
                        categoryId: categoryId,
                    },
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
                const meal1 = {};
                meal1._id = dbMeal._id;
                meal1.name = dbMeal.name;
                meal1.description = dbMeal.description;
                meal1.weight = dbMeal.weight;
                meal1.price = dbMeal.price;
                meal1.picture = dbMeal.picture;

                dbCategory.meals.push(
                    meal1

                );

                dbMeal.category = {
                    _id: dbCategory._id,
                    name: dbCategory.name,
                };

                return Promise.all([
                    this.data.meals.updateById(dbMeal),
                    this.data.categorys.updateById(dbCategory),
                ]);
            })
            .then(() => {
                return res.redirect('/');
            })
            .catch((err) => {
                req.flash('error', err);
                return res.redirect('/meals/form');
            });
    }
}

const init = (data) => {
    return new MealsController(data);
};

module.exports = { init };
