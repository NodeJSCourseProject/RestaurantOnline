class User {
    constructor(data) {
        this.data = data;
    }

    static isValid(model) {
        return typeof model !== 'undefined' &&
            typeof model.username === 'string' &&
            model.username.length > 4;
    }

    get id() {
        return this._id;
    }

    static toViewModel(model) {
        const viewModel = new User();

        Object.keys(model)
            .forEach((prop) => {
                viewModel[prop] = model[prop];
            });

        return viewModel;
    }

    createUser() {
        return new User()
            .then(user => {
                user.save(err => {
                    if (err) {
                        return err;
                    }
                    return user;
                });
            })
            .catch(err => {
                return err;
            });
    }

    getUserById(id, req, res) {
        return this.data.users.findById(id);
    }
}

module.exports = User;


