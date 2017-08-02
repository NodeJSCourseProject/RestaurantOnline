'use strict';
let User = require('../../../models/user.model');

class UsersController {
    constructor(data) {
        this.data = data;
    }

    getAccount(req, res) {
        return Promise.resolve()
            .then(() => {
                if (!req.isAuthenticated()) {
                    res.status(401).redirect('/unauthorized');
                } else {
                    res.render('../../views/user.profile.pug', { user: req.user });
                }
            });
    }
    postUpdateProfile(req, res, next) {
        User = new User(this.data);

        const id = req.user._id;
        return User.getUserById(id, req, res)
            .then((result) => {
                let user = result;
                if (!user) {
                    throw Error('Invalid user');
                }

                user.email = req.body.email || '';
                user.username = req.body.name || '';

                return this.data.users.updateById(user);
            })
            .then((user) => {
                req.flash('success', { msg: 'Your profile information is changed' });
                res.redirect('/profile');
            })
            .catch((err) => {
                req.flash('error', err.message);
                res.redirect(req.get('referer'));
            })
    }
    postUpdatePassword(req, res, next) {
        const id = req.user._id;
        this.data.users.findById(id)
            .then((user) => {
                if (!user) {
                    throw Error('invalid user');
                }

                user.password = req.body.password;
                return this.data.users.updateById(user);
            })
            .then((result) => {
                req.flash('success', { msg: 'Your password is changed' });
                res.redirect('/profile');
            })
            .catch((err) => {
                req.flash('error', err.message);
                res.redirect(req.get('referer'));
            })
    }
    postDeleteAccount(req, res, next) {
        const id = req.user._id;
        this.data.users.findById(id)
            .then((user) => {
                if (!user) {
                    throw Error('invalid user');
                }
            })
            .then((result) => {
                req.logout();
                req.flash('info', { msg: 'Your account is deleted' });
                res.redirect('/');
            })
            .catch((err) => {
                req.flash('error', err.message);
                res.redirect(req.get('referer'));
            });
    }
}

const init = (data) => {
    return new UsersController(data);
};

module.exports = { init };
