'use strict';

const controller = require('./MoviesController');

module.exports = function (app) {

    app.all('/*', function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
    });


    app.route('/')
        .get(controller.index);
    app.route('/:type')
        .get(controller.show);
    app.route('/').post(controller.store)
};