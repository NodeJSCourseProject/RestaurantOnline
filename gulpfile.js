/* eslint-disable no-console */

const gulp = require('gulp');

gulp.task('server:start', () => {
    return require('./server');
});

gulp.task('pre-test', () => {
    return gulp.src([
        './data/**/*.js',
        './app/**/*.js',
        './config/**/*.js',
        './db/**/*.js',
        './models/**/*.js',
        './server.js',
    ])
        .pipe(istanbul({
            includeUntested: true,
        }))
        .pipe(istanbul.hookRequire());
});

const { MongoClient } = require('mongodb');
