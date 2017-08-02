const BaseData = require('./base/base.data');
const User = require('../models/user.model');

class UsersData extends BaseData {
    constructor(db) {
        super(db, User, User);
    }

    findByUsername(username) {
        return this
            .filterBy({ username: new RegExp(username, 'i') })
            .then(([user]) => user);
    }

    checkPassword(username, password) {
        return this.findByUsername(username)
            .then((user) => {
                if (!user) {
                    throw new Error('Invalid user');
                }

                if (user.password !== password) {
                    throw new Error('Invalid password');
                }

                return true;
            });
    }

    addMealsToShoppingCart(username, meal, quantity) {
        return this.findByUsername(username)
            .then((user) => {
                if (!user) {
                    throw new Error('Invalid user');
                }
                const mealIndexInShoppingCart = user.shoppingCart.findIndex(x => x.meal.name === meal.name);
                quantity = Number(quantity);
                if (mealIndexInShoppingCart < 0) {
                    user.shoppingCart.push({
                        meal: meal,
                        quantity: quantity,
                    });
                }
                else {
                    user.shoppingCart[mealIndexInShoppingCart].quantity += quantity;
                }

                this.updateById(user);
            });

    }
}

module.exports = UsersData;
