'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MenuSchema = new Schema({
    name: {
        type: String
    },

    price: {
        type: String
    },


    deleted: {
        type: Boolean,
        default: false,
        index: true
    },

    updated: {
        type: Date,
        default: Date.now
    },

    created: {
        type: Date,
        default: Date.now
    }
});


mongoose.model('Menu', MenuSchema);
