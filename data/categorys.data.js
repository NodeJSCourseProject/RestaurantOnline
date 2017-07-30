const BaseData = require('./base/base.data');
const Category = require('../models/category.model');

class CategorysData extends BaseData {
    constructor(db) {
        super(db, Category, Category);
    }

    getCategoryMeals(_id) {
        return this.findById(_id)
            .then((category) => {
                const meals = category.meals;
                // console.log('promise meals1: ');
                // console.log(meals);

                return meals;
            });
        return meals;
    }

    _isModelValid(model) {
        // custom validation 
        return super._isModelValid(model);
    }
}

module.exports = CategorysData;
