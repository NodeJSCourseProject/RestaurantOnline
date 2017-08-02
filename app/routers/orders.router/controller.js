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
    }
}

const init = (data) => {
    return new OrdersController(data);
};

module.exports = { init };