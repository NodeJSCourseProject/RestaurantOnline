class Category {
    static isValid(model) {
        // console.log('+++C');
        // console.log(model);
        return typeof model !== 'undefined' &&
            typeof model.name === 'string' &&
            model.name.length >= 1; 
    }

    get id() {
        return this._id;
    }

    static toViewModel(model) {
        const viewModel = new Category();

        Object.keys(model)
            .forEach((prop) => {
                viewModel[prop] = model[prop];
            });

        return viewModel;
    }
}

module.exports = Category;