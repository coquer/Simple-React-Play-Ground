/**
 * Created by jycr753 on 7/26/15.
 */
window.React = require('react');
var ProductData = require('./ProductData');
var CartAPI = require('./utils/apiUtils')
var FluxCartApp = require('./components/MainController');

// Load Mock Product Data into localStorage
ProductData.init();

// Load Mock API Call
CartAPI.getProductData();

// Render FluxCartApp Controller View
React.render(
<FluxCartApp />,
    document.getElementById('flux-cart')
);

document.addEventListener('DOMContentLoaded', function(){
    var nav_trigger = document.getElementById("nav-trigger");
    nav_trigger.addEventListener("click", function(){
        console.log("clicking");
        var nav_user_info = document.getElementById('userContent');
        var active_class = 'show_item';
        console.log(nav_user_info.offsetParent === null);
        nav_user_info.offsetParent === null ? nav_user_info.classList.add(active_class) : nav_user_info.classList.remove(active_class);

    });
});



$(document).ready(function(){
    console.log("Load");
    $('#Container').mixItUp();
    //console.log($('#Container').mixItUp())
});