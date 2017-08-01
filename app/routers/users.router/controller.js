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
        // req.assert('email', 'Enter a valid email, please').isEmail();
        // req.sanitize('email').normalizeEmail({ remove_dots: false });
        // console.log("here!!!!!!");

        // const errors = req.validationErrors();

        // if (errors) {
        //     req.flash('errors', errors);
        //     return res.redirect('/profile');
        // }
        //User.findById(req.user.id, (err, user) => {
        //db.getCollection('users').find({})

        return User.getUserById(req, res)
            .then(() => {
                if (!user) {
                    throw Error('Invalid user');
                }

                user.email = req.body.email || '';
                user.profile.name = req.body.name || '';

                return this.data.users.update({ _id: req.user.id }, user);
            })
            .then((user) => {
                req.flash('success', { msg: 'Your profile information is changed' });
                res.redirect('/profile');
            })
            .catch((err) => {
                req.flash('error', err.message);
                res.redirect(req.get('referer'));
            })




        // User.getUserById(req.user.id, (err, user) => {
        //     if (err) {
        //         return next(err);
        //     }
        //     user.email = req.body.email || '';
        //     user.profile.name = req.body.name || '';
        //     user.save((err) => {
        //         if (err) {
        //             if (err.code === 11000) {
        //                 req.flash('errors', { msg: 'This email is already used' });
        //                 return res.redirect('/profile');
        //             }
        //             return next(err);
        //         }
        //         req.flash('success', { msg: 'Your profile information is changed' });
        //         res.redirect('/profile');
        //     });
        // });
    }
    postUpdatePassword(req, res, next) {
        // req.assert('password', 'Invalid password').len(4);
        // req.assert('confirmPassword', 'The password does not match').equals(req.body.password);

        // const errors = req.validationErrors();

        // if (errors) {
        //     req.flash('errors', errors);
        //     return res.redirect('/profile');
        // }

        User.findById(req.user.id, (err, user) => {
            if (err) {
                return next(err);
            }
            user.password = req.body.password;
            user.save((err) => {
                if (err) { return next(err); }
                req.flash('success', { msg: 'Your password is changed' });
                res.redirect('/profile');
            });
        });
    }
    postDeleteAccount(req, res, next) {
        User.remove({ _id: req.user.id }, (err) => {
            if (err) {
                return next(err);
            }
            req.logout();
            req.flash('info', { msg: 'Your account is deleted' });
            res.redirect('/');
        });
    }
}

const init = (data) => {
    return new UsersController(data);
};

module.exports = { init };
