"use strict";

// const express = require("express");

// let Router = express.Router;

// module.exports = function({ app, data }) {
//     let controller = require("../../controlers/users.controler")(data);

//     let router = new Router();

//     router
//         //.get("/:id/myrecipes", controller.allAddedRecipes)
//         //.get("/:id/favorites", controller.allFavoritesRecipes)
//         .post("/:id", controller.addToFavorites);

//     app.use("/profile", router);

//     return router;
// };

const { Router } = require('express');
const passport = require('passport');

const attachTo = (app, data) => {
    const router = new Router();
    const controller = require('./controller').init(data);

    router
        .get('/:id', (req, res) => {
            return controller.getAccount(req, res);
        })
        .post('/:id', (req, res) => {
            return controller.postUpdateProfile(req, res);
        })
        .post('/:id', (req, res) => {
            return controller.postUpdatePassword(req, res);
        })
        .post('/:id', (req, res) => {
            return controller.postDeleteAccount(req, res);
        })
        .post('/sign-in', passport.authenticate('local', {
            successRedirect: '/meals/form',
            failureRedirect: '/auth/sign-up',
            failureFlash: true,
        }));

    app.use('/profile', router);
};

module.exports = { attachTo };

