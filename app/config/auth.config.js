const passport = require('passport')
const { Strategy } = require('passport-local');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const applyTo = (app, data) => {
    passport.use(new Strategy(
        (username, password, done) => {
            data.users.findByUsername(username)
                .then((user) => {
                    if (user) {
                        return done(null, false, { message: 'Incorrect username.' });
                    }

                    if (!user.validPassword(password)) {
                        return done(null, false, { message: 'Incorrect password.' });
                    }

                    return done(null, user);
                }).catch((err) => {
                    return done(null, false, { message: err.message });
                })
        }
    ));

    app.use(cookieParser());
    app.use(session({ secret: 'Batman returns' }));
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        data.users.findById(id)
            .then((user) => {
                done(null, user);
            })
            .catch(done);
    });
};

module.exports = { applyTo };