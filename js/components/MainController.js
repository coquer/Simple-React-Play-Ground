/**
 * Created by jycr753 on 7/26/15.
 */
var React = require('react');
var CartStore = require('../stores/ListStore');
var ProductStore = require('../stores/ProductStore');
var FluxProduct = require('./ProductComponent');
var FluxCart = require('./ListComponent');
var NavibarComponent = require('./NavibarComponent');
var FooterComponent = require('./FooterComponent');

// Method to retrieve state from Stores
function getCartState() {
    return {
        product: ProductStore.getProduct(),
        selectedProduct: ProductStore.getSelected(),
        cartItems: CartStore.getCartItems(),
        cartCount: CartStore.getCartCount(),
        cartTotal: CartStore.getCartTotal(),
        cartVisible: CartStore.getCartVisible()
    };
}

// Define main Controller View
var FluxCartApp = React.createClass({

    // Get initial state from stores
    getInitialState: function () {
        return getCartState();
    },

    // Add change listeners to stores
    componentDidMount: function () {
        ProductStore.addChangeListener(this._onChange);
        CartStore.addChangeListener(this._onChange);
    },

    // Remove change listers from stores
    componentWillUnmount: function () {
        ProductStore.removeChangeListener(this._onChange);
        CartStore.removeChangeListener(this._onChange);
    },

    // Render our child components, passing state via props
    render: function () {
        return (

            <div className="flux-cart-app">
                <NavibarComponent />
                <FluxCart products={this.state.cartItems} count={this.state.cartCount} total={this.state.cartTotal}
                          visible={this.state.cartVisible}/>
                <FluxProduct product={this.state.product} cartitems={this.state.cartItems}
                             selected={this.state.selectedProduct}/>
                <FooterComponent />
            </div>
        );
    },

    // Method to setState based upon Store changes
    _onChange: function () {
        this.setState(getCartState());
    }

});

module.exports = FluxCartApp;