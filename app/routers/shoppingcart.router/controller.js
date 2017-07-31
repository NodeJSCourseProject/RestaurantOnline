class ShoppingCartsController {
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
                return res.render('/shoppingcart/form');
            });
    }

    addMeals(req, res) {
        const user = req.user;
        const id = req.params._id.slice(1);

        return this.data.meals.findById(id)
            .then((meal)=>{
                this.data.users.addMealsToShoppingCart(user.username, meal, req.body.quantity);
            })
            .then(()=>{
                return res.render('shoppingcart/button');
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
    return new ShoppingCartsController(data);
};

module.exports = { init };