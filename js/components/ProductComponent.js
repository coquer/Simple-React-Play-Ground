/**
 * Created by jycr753 on 7/26/15.
 */
var React = require('react');
var ProductActions = require('../actions/Actions');

// Flux product view
var FluxProduct = React.createClass({
    //well single item lol
    showFullProductData : function(e){
        //do todo
        this.updateFullProductDataVisibility();
    },

    updateFullProductDataVisibility: function(){

    },

    addToCart: function (e) {
        var selected_product = this.props.product[e];
        //var selected_option = this.props.target;
        //console.log(selected_option);
        var sku = selected_product.id;
        var update = {
            name: selected_product.box,
            type: selected_product.box_type,
            price: selected_product.base_price,
            images: selected_product.pictures_urls[0].desktop_picture_thumbnail_url,
            location: selected_product.status_text
        };
        //console.log(sku);
        //console.log(update);
        ProductActions.addToCart(sku, update);
        ProductActions.updateCartVisible(false);
    },
// Select product variation via Actions
    selectVariant: function (event) {
        ProductActions.selectProduct(event.target.value);
    },

// Render product View
    render: function () {
        return(
            <div className="product_container">
                <ul className="nav nav-tabs nav-justified">
                    <li role="presentation" className="filter" data-filter=".category-1" ><a href="#">I opbevaring</a></li>
                    <li role="presentation" className="filter" data-filter=".category-2" ><a href="#">Hjemme hos mig</a></li>
                </ul>

                <div id="Container">
                {this.props.product.map(function(single, index){
                    //running out of time, oops what a but solution lol
                    console.log("--> "+single.status);
                        return(
                            <div key={index} className={"mix category-" + single.status +" flux-product"} data-my-order={index}>
                                {single.pictures_urls.map(function(image, index){
                                    console.log(index);
                                    if(index == 0){
                                        return(
                                            <img src={image.desktop_picture_thumbnail_url} key={index}/>
                                        );
                                    }

                                })}
                                <div className="flux-product-detail">
                                    <p>{single.contents}</p>
                                    <label>Serier nr: GB-{single.box}</label>
                                    <label>Location: {single.status_text}</label>
                                    <button className="btn default" type="button" onClick={this.addToCart.bind(this, index)}>{single.status == 1 ? "Bestil kasse hjem" : "Bestil Kasse"}</button>
                                </div>
                                <a href="#" className="edit_btn" data-toggle="modal" data-target="#userContent" onClick={this.showFullProductData.bind(this, index)}>Mere...</a>
                                <div className="modalContainer" id="userContent" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">

                                </div>
                            </div>
                        );
                    }.bind(this))}
                </div>
            </div>
        );
    }
});

module.exports = FluxProduct;