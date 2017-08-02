const BaseData=require('./base/base.data');
const Meal=require('../models/meal.model');

class ShoppingCartData extends BaseData {
    constructor(db) {
        super(db, ShoppingCart, ShoppingCart);
    }
    _isModelValid(model) {
        return super._isModelValid(model);
    }
}

module.exports=ShoppingCartData;