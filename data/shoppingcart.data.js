const BaseData=require('./base/base.data');
const Meal=require('../models/meal.model');

class ShoppingCartData extends BaseData {
    constructor(db) {
        super(db, ShoppingCart, ShoppingCart);
    }
    _isModelValid(model) {
        // custom validation 
        return super._isModelValid(model);
    }
}

module.exports=ShoppingCartData;