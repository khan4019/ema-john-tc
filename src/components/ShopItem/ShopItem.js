import React, { Component } from 'react';
import Rating from 'react-rating';
import './ShopItem.css';

import '../../../node_modules/font-awesome/css/font-awesome.min.css';

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
                            <button onClick={() => this.props.addToCart(item.id)}>add to cart</button>
                        </div>
                        <div>
                            <Rating
                               className="ratings"
                               empty="fa fa-star-o"
                               full="fa fa-star"
                               placeholder="fa fa-star"
                               placeholderRate={item.star}
                               readonly
                            />
                        </div>        
                    </div>
                </div>
            </div>
        );
    }
}


export default ShopItem;