class OrdersController {
    constructor(data) {
        this.data = data;
    }

    getAll(req, res) {

        return this.data.orders
            .then((orders) => {
                return res.render('orders/all', {
                    context: orders || [],
                });
            });
    }

    getForm(req, res) {
        return Promise.resolve()
            .then(() => {
                return res.render('orders/form');
            });
    }

    create(req, res) {
        const address = req.body.deliveryAddress;

        const user = req.user;

        return this.data.users.findById(user._id)
            .then(async (user) => {
                const order = {};
                order.items = JSON.parse(JSON.stringify(user.shoppingCart));
                order.deliveryAddress = req.body.deliveryAddress;
                user.shoppingCart = [];
                user.orders = user.orders || [];
                user.orders.push(order);
                await this.data.users.updateById(user);

                return order;
            })
            .then((order) => this.data.orders.create(order))
            .then(() => {
                return res.redirect('/');
            });

        // Promise
        //     .all([
        //         this.data.meals.create(meal),
        //         this.data.categorys.findOrCreateBy(category),
        //     ])
        //     .then(([dbMeal, dbCategory]) => {
        //         dbCategory.name = meal.category;
        //         dbCategory.meals = dbCategory.meals || [];
        //         dbCategory.meals.push({
        //             _id: dbMeal._id,
        //             name: dbMeal.name,
        //             description: dbMeal.description,
        //             weight: dbMeal.weight,
        //             price: dbMeal.price,
        //             picture: dbMeal.picture,
        //         });

        //         dbMeal.category = {
        //             _id: dbCategory._id,
        //             name: dbCategory.name,
        //         };

        //         // console.log('***');
        //         // console.log(dbMeal);
        //         // console.log(dbCategory);

        //         //user.todos = user.todos || [];
        //         // user.todos.push({
        //         //     _id: dbTodo._id,
        //         //     text: dbTodo.text,
        //         //     isDone: dbTodo.isDone,
        //         //     category: dbTodo.category,
        //         // });

        //         return Promise.all([
        //             this.data.meals.updateById(dbMeal),
        //             this.data.categorys.updateById(dbCategory),
        //             //this.data.users.updateById(user),
        //         ]);
        //     })
        //     .then(() => {
        //         // connect-flash
        //         return res.redirect('/');
        //     })
        //     .catch((err) => {
        //         // console.log('err:');
        //         // console.log(err);
        //         req.flash('error', err);
        //         return res.redirect('/meals/form');
        //     });
    }
}

const init = (data) => {
    return new OrdersController(data);
};

module.exports = { init };