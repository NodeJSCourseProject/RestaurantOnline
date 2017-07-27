const dataUtils = require('./utils/data.utils');
const mapper = require('../utils/mapper');
const fs = require('fs');
const hashing = require('../utils/encryption');

module.exports = function(models) {
    const {
        User,
    } = models;

    return {
        createUser(username, callback) {
            const salt = hashing.generateSalt();
            const hashedPass = hashing.generateHashedPassword(salt, user.password);
            const newUser = {
                    username: user.username,
                    email: user.email,
                    salt,
                    hashedPass,
                    firstName: user.firstName,
                    lastName: user.lastName,
            };
            const user = new User({ newUser, callback });
            return new Promise((resolve, reject) => {
                user.save((err) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(user);
                });
            });
        },
        updateUser(user, imagePath) {
            try {
                if (user.imagePath) {
                    fs.unlinkSync(user.imagePath);
                }
            } catch (ex) {
                console.log(ex);
            }

            user.imagePath = imagePath;
            return dataUtils.save(user);
        },
        getUserByUsername(username) {
            return new Promise((resolve, reject) => {
                dataUtils.getByQuery(User, { username });
            });
        },
        getAllUsers() {
            return new Promise((resolve, reject) => {
            dataUtils.getAll(User);
            });
        },
    };
};
