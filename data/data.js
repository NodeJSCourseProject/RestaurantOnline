const UsersData = require('./users.data');
const CategorysData = require('./categorys.data');
const MealsData = require('./meals.data');
const OrdersData = require('./orders.data');

const init = (db) => {
    return Promise.resolve({
        meals: new MealsData(db),
        users: new UsersData(db),
        categorys: new CategorysData(db),
        orders: new OrdersData(db),

    });
};

module.exports = {
    init,
};
