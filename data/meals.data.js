const BaseData=require('./base/base.data');
const Meal=require('../models/meal.model');

class MealsData extends BaseData {
    constructor(db) {
        super(db, Meal);
    }
}

module.exports=MealsData;
