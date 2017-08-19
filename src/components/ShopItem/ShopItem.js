import React, { Component } from 'react';
import './ShopItem.css';

class ShopItem extends Component {
    render() {
        var item  = this.props.item;
        return (
            <div className="item">
                <div>
                    <img src={item.img} alt =""/>
                </div>
                <div>
                    <h4 className="item-header">{item.name}</h4>
                    <p><small>by: {item.seller}</small></p>
                    <div className="item-description">
                        <div>
                            <p>${item.price}</p>
                            <p><small>Only {item.stock} left in stock</small></p>
                            <button>add to cart</button>
                        </div>
                        <div>
                        </div>        
                    </div>
                </div>
            </div>
        );
    }
}


export default ShopItem;