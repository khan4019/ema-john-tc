import React, { Component } from 'react';

class Cart extends Component {
    constructor(){
        super();
        this.totalPrice = 100;
    }

    calculatePrice(){
        this.totalPrice = 1000
    }
    render() {
        const cart = this.props.cart;
        this.calculatePrice();
        return (
            <div>
                <h4>Order summary</h4>
                <p> Items ordered:{cart.length}</p>
                <h3>Total price: {this.totalPrice}</h3>
            </div>
        );
    }
}

export default Cart;