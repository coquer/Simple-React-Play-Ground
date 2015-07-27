/**
 * Created by jycr753 on 7/26/15.
 */
var React = require('react');
var ComponentActions = require('../actions/Actions');

var ListComponent = React.createClass({

    closeCart: function(){
        ComponentActions.updateCartVisible(false);
    },

    openCart: function(){
        ComponentActions.updateCartVisible(true);
    },

    toCheckOut:function(){
        var self = this,
            products = this.props.products;
        console.log(products);
    },

    removeFromCart: function(sku){
        ComponentActions.removeFromCart(sku);
        ComponentActions.updateCartVisible(false);
    },

    render: function() {
        var self = this,
            products = this.props.products;
        return (
            <div className={"flux-cart " + (this.props.visible ? 'active' : '')}>
                <div className="mini-cart">
                    <button type="button" className="close-cart" onClick={this.closeCart}>×</button>
                    <ul>
                        {Object.keys(products).map(function(product){
                            return (
                                <li key={product}>
                                    <h1 className="name">Box name: {products[product].name}</h1>
                                    <h3 className="location">Location: {products[product].location}</h3>
                                    <p className="type">Deliver: {products[product].type} x {products[product].quantity}</p>
                                    <p className="price">Price: {(products[product].price * products[product].quantity).toFixed(2)} kr.-</p>
                                    <button type="button" className="btn btn-danger" onClick={self.removeFromCart.bind(self, product)}>Remove</button>
                                </li>
                            )
                        })}
                    </ul>
                    <span className="total">Sub: {this.props.total} kr.-</span>
                    <button type="button" className="btn default checkout" onClick={self.toCheckOut}>Bestil valgte kasser</button>
                </div>
                <button type="button" className={Object.keys(this.props.products).length > 0 ? "" : "hide_me position_fixed view-cart"}  onClick={this.openCart} disabled={Object.keys(this.props.products).length > 0 ? "" : "disabled"}>Min Bestilling ({this.props.count})</button>
            </div>
        );
    }

    });

module.exports = ListComponent;