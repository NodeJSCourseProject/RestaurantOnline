const modelRegistrator = require('./utils/model.registrator');

const hashing = require('../utils/encryption');
const forbiddenCharacters = ['<', '>', '(', ')'];
const userRoles = ['user', 'admin'];

module.exports = modelRegistrator.register('User', {
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2,
        maxlength: 30,
        validate: {
            validator: function(val) {
                return val.match('^[a-zA-Z0-9_.]*$');
            },
            message: 'Username should only contain alphanumeric characters!',
        },
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 30,
        match: /[A-Za-z0-9_]/,
    },
    password: {
        type: String,
        required: true,
    },
    salt: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 30,
        validate: {
            validator: function(val) {
                const containsForbiddenChars = forbiddenCharacters.some(
                    (item) => {
                        return val.includes(item);
                    }
                );
                return !containsForbiddenChars;
            },
            message: 'First name should not contain invalid characters!',
        },
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 30,
        validate: {
            validator: function(val) {
                const containsForbiddenChars = forbiddenCharacters.some(
                    (item) => {
                        return val.includes(item);
                    }
                );
                return !containsForbiddenChars;
            },
            message: 'Last name should not contain invalid characters!',
        },
    },
    role: {
        type: String,
        default: 'user',
        required: true,
        validate: {
            validator: function(val) {
                return userRoles.some((item) => {
                    return item === val;
                });
            },
            message: 'Invalid user role!',
        },
    },
    orders: {
        type: [{}],
        default: [],
    },
    imagePath: {
        type: String,
    },
});
