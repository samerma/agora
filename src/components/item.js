import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

@inject("inventory")
@observer
class Item extends Component {
    buyItem = () => {
        this.props.inventory.buyItem(this.props.item.name)
    }
    editItemPrice = () => {
        const newPrice = prompt("Please enter a new price")
        this.props.inventory.changePrice(this.props.item.name, newPrice)
    }
    render() {
        let item = this.props.item
        return (
            <div className='item'>
                <li>
                    <p onDoubleClick={this.editItemPrice}>{item.quantity} {item.name} available at ${item.price} per item</p>
                    <button className="buyButton" onClick={this.buyItem}>Buy</button>
                </li>
            </div>
        )
    }
}

export default Item