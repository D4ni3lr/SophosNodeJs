'use strict';

const controller = require('./MoviesController');

module.exports = function (app) {
    app.route('/')
        .get(controller.index);
    app.route('/:type')
        .get(controller.show);
    app.route('/').post(controller.store)
};