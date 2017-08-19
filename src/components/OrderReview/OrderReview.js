import React, { Component } from 'react';

import {getDatabaseCart} from '../../utilities/databaseManager';
import fakeData from '../../fakeData';

class OrderReview extends Component {
    constructor(){
        super();
        this.state = {
            items: []
        }
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
    
    render() {
        return (
            <div>
                {
                    this.state.items.map(item=><li>{item.name}</li>)
                }
            </div>
        );
    }
}

export default OrderReview;