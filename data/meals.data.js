const BaseData=require('./base/base.data');
const Meal=require('../models/meal.model');

class MealsData extends BaseData {
    constructor(db) {
        super(db, Meal, Meal);
    }

    _isModelValid(model) {
        return super._isModelValid(model);
    }
}

module.exports=MealsData;
