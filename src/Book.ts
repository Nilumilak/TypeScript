import Buyable from "./Interfaces/Buyable"

export default class Book implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly author: string,
        readonly price: number,
        readonly pages: number
    ) {
        this.id = id
        this.name = name
        this.author = author
        this.price = price
        this.pages = pages
    }
}