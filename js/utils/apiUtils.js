/**
 * Created by jycr753 on 7/26/15.
 */
var FluxCartActions = require('../actions/Actions');

module.exports = {

    getProductData: function() {
        var data = JSON.parse(localStorage.getItem('product'));
        FluxCartActions.receiveProduct(data);
    },

    getPersonData: function(){
        var data = JSON.parse(localStorage.getItem('person'));
        FluxCartActions.receivePerson(data);
    }



};