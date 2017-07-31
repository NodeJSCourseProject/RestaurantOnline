const BaseData=require('./base/base.data');
const Order=require('../models/order.model');

class OrdersData extends BaseData {
    constructor(db) {
        super(db, Order, Order);
    }
    _isModelValid(model) {
        // custom validation 
        return super._isModelValid(model);
    }
}

module.exports=OrdersData;