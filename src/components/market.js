import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import Item from './item'

@inject("inventory")
@observer
class Market extends Component {
    handleChange = (e) => {
        this.setState({
            newItem: e.target.value
        })
    }
    addItem = () => {
        this.props.inventory.addItem(this.state.newItem)
    }
    render() {
        let items = this.props.inventory.items
        return (
            <div className='item'>
                <input onChange={this.handleChange} />
                <button onClick={this.addItem}>Add</button>
                <ul>
                    {items.map((i, ind) => <Item item={i}
                        key={ind} />
                    )}
                </ul>
            </div>
        )
    }
}

export default Market