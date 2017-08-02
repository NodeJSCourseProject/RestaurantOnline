class ShoppingCartsController {
    constructor(data) {
        this.data = data;
    }

    getForm(req, res) {
        const _id = req.user._id;
        return this.data.users.findById(_id)
            .then((user) => {
                return res.render('shoppingcart/form', {
                    context: user.shoppingCart,
                });
            });
    }

    addMeals(req, res) {
        const user = req.user;
        const id = req.params._id.slice(1);

        return this.data.meals.findById(id)
            .then((meal) => {
                this.data.users.addMealsToShoppingCart(user.username, meal, req.body.quantity);
            })
            .then(() => {
                return res.render('home');
            });
    }

    eraseAll(req, res) {
        return this.data.users.findById(req.user._id)
            .then((user) => {
                user.shoppingCart = [];
                return user;
            })
            .then(async (user) => {
                await this.data.users.updateById(user);
            })
            .then(() => {
                return res.render('/');
            });
    }
}

const init = (data) => {
    return new ShoppingCartsController(data);
};

module.exports = { init };