// const dataUtils = require('./utils/data.utils');
// const mapper = require('../utils/mapper');
// const fs = require('fs');
// const hashing = require('../utils/encryption');

// module.exports = function(models) {
//     const {
//         User,
//     } = models;

//     return {
//         createUser(username, callback) {
//             const salt = hashing.generateSalt();
//             const hashedPass = hashing.generateHashedPassword(salt, user.password);
//             const newUser = {
//                     username: user.username,
//                     email: user.email,
//                     salt,
//                     hashedPass,
//                     firstName: user.firstName,
//                     lastName: user.lastName,
//             };
//             const user = new User({ newUser, callback });
//             return new Promise((resolve, reject) => {
//                 user.save((err) => {
//                     if (err) {
//                         return reject(err);
//                     }

//                     return resolve(user);
//                 });
//             });
//         },
//         updateUser(user, imagePath) {
//             try {
//                 if (user.imagePath) {
//                     fs.unlinkSync(user.imagePath);
//                 }
//             } catch (ex) {
//                 console.log(ex);
//             }

//             user.imagePath = imagePath;
//             return dataUtils.save(user);
//         },
//         getUserByUsername(username) {
//             return dataUtils.getByQuery(User, { username });
//         },
//         getAllUsers() {
//             return dataUtils.getAll(User);
//         },
//     };
// };
const BaseData = require('./base/base.data');
const User = require('../models/user.model');

class UsersData extends BaseData {
    constructor(db) {
        super(db, User, User);
    }

    findByUsername(username) {
        //console.log("**", this);
        return this
            .filterBy({ username: new RegExp(username, 'i') })
            .then(([user]) => user);
    }

    checkPassword(username, password) {
        return this.findByUsername(username)
            .then((user) => {
                if (!user) {
                    throw new Error('Invalid user');
                }

                if (user.password !== password) {
                    throw new Error('Invalid password');
                }

                return true;
            });
    }
}

module.exports = UsersData;
