class Order {
    static isValid(model) {
        // console.log('+++M');
        // console.log(model);
        return typeof model !== 'undefined'; // &&
            // typeof model.name === 'string' &&
            // model.name.length > 1;   //TODO the rest
    }

    get id() {
        return this._id;
    }

    static toViewModel(model) {
        const viewModel = new Order();

        Object.keys(model)
            .forEach((prop) => {
                viewModel[prop] = model[prop];
            });

        return viewModel;
    }
}

module.exports = Order;