'use strict';

var movies = [];

var controllers = {
    index: function (req, res) {
        res.json(movies);
    },
    show: function (req, res) {
        var result = movies.filter((movie) => movie.type === req.params.type)
        return res.status(result.length > 0 ? 200 : 404).json(result)
    },
    store: function (req, res) {
        movies.push(req.body)
        res.sendStatus(200);
    }
};

module.exports = controllers;