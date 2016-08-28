'use strict';

var MenuHandler = require('../handlers/menu');
var menu = new MenuHandler(require('../services/menu'));

var Router = require('express').Router;

module.exports = function (app) {
    app.route('/menu')
        .get(menu.getAll.bind(menu))
        .post(menu.create.bind(menu));

    app.route('/menu/:menu')
        .get(menu.getOne.bind(menu))
    
    app.param('menu', menu.param.bind(menu));
};