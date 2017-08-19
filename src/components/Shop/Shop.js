import React, { Component } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';

import ShopItem from '../ShopItem/ShopItem';
import Cart from '../Cart/Cart';
import {addToDatabaseCart} from '../../utilities/databaseManager';

class Shop extends Component {
    constructor(){
        super();
        this.state = {
            items: [],
            cart: [],
            cartCount:{}
        }
        this.addToCart = this.addToCart.bind(this);
    }
    componentDidMount() {
        var first10 = fakeData.slice(0,10);
        this.setState({
            items: first10
        })
    }

    addToCart(id){
        var itemSelected = this.state.items.find(item => item.id === id);
        var newCart = [...this.state.cart, itemSelected];
        this.setState({
            cart: newCart
        })

        var newCartCount = Object.assign({}, this.state.cartCount);
        var previousCount = newCartCount[id] || 0;
        var newCount = previousCount + 1;
        newCartCount[id] = newCount;

        this.setState({
            cartCount: newCartCount
        })

        addToDatabaseCart(id, newCount);
    }
    
    render() {
        return (
            <div>
                <div className="shop-container">
                    <div className="items-container">
                        {
                            this.state.items
                            .map(item =><ShopItem 
                                key={item.id} 
                                addToCart = {this.addToCart}
                                item={item}
                                ></ShopItem>)
                        }
                    </div>
                    <div className="cart-container">
                        <Cart cart={this.state.cart}></Cart>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shop;