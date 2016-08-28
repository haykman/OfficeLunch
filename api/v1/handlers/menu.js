'use strict';

var validator = require('express-validator').validator;
var _ = require('lodash');

function MenuHandler(addressService) {
    this.service = addressService;
}

MenuHandler.prototype.getAll = function (req, res, next) {
    this.service.getMenu()
        .then(function (menu) {
            res.status(200).send(menu);
        })
        .catch(next);
};

MenuHandler.prototype.getOne = function(req, res, next) {
    res.status(200).send(req.menu);
};

MenuHandler.prototype.create = function(req, res, next) {
    this.service.create(_.pick(req.body, ['name', 'price']))
        .then(function (menu) {
            res.status(201).send(menu);
        })
        .catch(next);
};


MenuHandler.prototype.param = function (req, res, next, id) {
    if (!validator.isMongoId(id)) {
        return res.status(400).end();
    }

    this.service.getOne(id)
        .then(function (menu) {
            if (!menu) {
                return res.status(404).end();
            }

            req.menu = menu;

            next();
        })
        .catch(next);
};


module.exports = MenuHandler;