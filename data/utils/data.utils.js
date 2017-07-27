module.exports = {
    loadOrCreateMeal(Meal, name) {
        return new Promise((resolve, reject) => {
            Meal.findOne({ name }, (err, dbMeal) => {
                let meal = dbMeal;

                if (err) {
                    return reject(err);
                }

                if (meal) {
                    return resolve(meal);
                }

                meal = new Meal({ name });
                return this.save(meal)
                    .then(resolve)
                    .catch(reject);
            });
        });
    },
    update(model) {
        return new Promise((resolve, reject) => {
            model.save((err) => {
                if (err) {
                    return reject(err);
                }
                return resolve(model);
            });
        });
    },
    getAll(Schema) {
        return this.getByQuery(Schema, {});
    },
    getById(Schema, id) {
        return new Promise((resolve, reject) => {
            Schema.findOne({ _id: id }, (err, obj) => {
                if (err) {
                    return reject(err);
                }
                return resolve(obj);
            });
        });
    },
    getByQuery(Schema, query) {
        return new Promise((resolve, reject) => {
            Schema.find(query, (err, objects) => {
                if (err) {
                    return reject(err);
                }

                return resolve(objects);
            });
        });
    },
    save(model) {
        return new Promise((resolve, reject) => {
            model.save((err) => {
                if (err) {
                    return reject(err);
                }

                return resolve(model);
            });
        });
    },
};
