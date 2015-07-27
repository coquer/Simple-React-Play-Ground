/**
 * Created by jycr753 on 7/26/15.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxCartConstants = require('../constants/AppConstants');
var _ = require('underscore');

// Define initial data points
var _product = [], _selected = [];
var _person = [];

function loadProductData(data) {
    for(var x =0; x < data.length; x ++) {
        _product.push(data[x]);
        for (var y = 0; y < data[x].pictures_urls.length; y++) {
            _selected.push(data[x].pictures_urls[y]);
        }
    }
}

function setSelected(index) {
    _selected = _product.pictures_urls[index];
}


var ProductStore = _.extend({}, EventEmitter.prototype, {

    // Return Product data
    getProduct: function() {
        return _product;
    },

    // Return selected Product
    getSelected: function(){
        return _selected;
    },

    // Emit Change event
    emitChange: function() {
        this.emit('change');
    },

    // Add change listener
    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    // Remove change listener
    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }

});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
    var action = payload.action;
    var text;

    switch(action.actionType) {

        // Respond to RECEIVE_DATA action
        case FluxCartConstants.RECEIVE_DATA:
            loadProductData(action.data);
            break;

        // Respond to SELECT_PRODUCT action
        case FluxCartConstants.SELECT_PRODUCT:
            setSelected(action.data);
            break;

        default:
            return true;
    }

    // If action was responded to, emit change event
    ProductStore.emitChange();

    return true;

});

module.exports = ProductStore;