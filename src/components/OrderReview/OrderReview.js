import React, { Component } from 'react';

import {getDatabaseCart, removeFromDatabaseCart, processOrder} from '../../utilities/databaseManager';
import fakeData from '../../fakeData';

import giphy from '../../images/giphy.gif';

class OrderReview extends Component {
    constructor(){
        super();
        this.state = {
            items: [],
            isOrdered: false
        }
        this.removeItem = this.removeItem.bind(this);
       this.placeOrder = this.placeOrder.bind(this);
    }
    componentDidMount() {
        var savedCart = getDatabaseCart();
        var selectedIds = Object.keys(savedCart);
        var savedItems = selectedIds.map(id => {
            var item = fakeData.find(item => item.id === id);
            item.quantity = savedCart[id];
            return item;
        })

        this.setState({
            items: savedItems
        })
        
    }
    removeItem(id){
        var remainingItems = this.state.items.filter(item=> item.id !== id);
        this.setState({
            items: remainingItems
        })
        removeFromDatabaseCart(id);

    }

    placeOrder(){
        this.setState({
            isOrdered: true
        })
        processOrder();
    }
    
    render() {

        var displayHtml = null;
        if(this.state.isOrdered){
            displayHtml = <img src={giphy}/>
        }
        else{
            displayHtml = this.state.items.map(item=><li 
                key={item.id}>
                {item.name} <button onClick={()=> this.removeItem(item.id)}>remove</button>
            </li>)
        }

        return (
            <div>
                <button onClick={this.placeOrder}>place order</button>
                {
                    displayHtml
                }
            </div>
        );
    }
}

export default OrderReview;