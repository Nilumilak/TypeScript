import Buyable from "./Interfaces/Buyable"

export default class Cart {
    private _items: Buyable[] = []

    add(item: Buyable): void {
        this._items.push(item)
    }

    get items(): Buyable[] {
        return [...this._items]
    }

    fullCost(): number {
        return this.items.reduce((acc: number, item: Buyable): number => {
            return acc + item.price
        }, 0)
    }

    costWithDiscount(discount: number): number {
        return this.fullCost() * ((100 - discount) * 0.01)
    }

    remove(id: number): void {
        for (let item of this._items) {
            if (item.id === id) {
                this._items.splice(this._items.indexOf(item), 1)
                return
            }
        }
    }
}
