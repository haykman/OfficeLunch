'use strict';

var mongoose = require('mongoose-q')(require('mongoose'));
var Menu = mongoose.model('Menu');

exports.getMenu = function () {
    return Menu
        .find({deleted: false})
        .select('-deleted -__v')
        .execQ();
};

exports.getOne = function (id) {
    return Menu
        .findOne({ _id: id, deleted: false })
        .select('-deleted -__v')
        .execQ();
};

exports.create = function (data) {
    var menu = new Menu(data);
    return menu.saveQ();
};
