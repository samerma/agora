import { observable, action, computed } from 'mobx'

export class Item {
    @observable name
    @observable price
    @observable quantity
    constructor(name, price, quantitiy) {
        this.name = name
        this.price = price
        this.quantity = quantitiy
    }
}

export class Inventory {
    @observable items = []

    @computed get numItems() {
        return this.items.length
    }

    @action addItem = (name, price = 0, quantitiy = 1) => {
        let item = this.items.find(i => i.name === name)
        if (item)
            item.quantity++
        else {
            item = new Item(name, price, quantitiy)
            this.items.push(item)
        }
    }
    @action buyItem = (name) => {
        let item = this.items.find(i => i.name === name)
        if (item.quantity > 0)
            item.quantity--
        else {
            let itemIndex = this.items.findIndex(i => i.name === name)
            this.items.splice(itemIndex, 1)
        }
    }
    @action changePrice = (name, price) => {
        const item = this.items.find(i => i.name === name)
        item.price = price
    }
}