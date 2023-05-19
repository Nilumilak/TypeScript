import Buyable from "./Interfaces/Buyable"

export default class Movie implements Buyable {
    readonly id: number
    readonly name: string
    readonly price: number
    readonly year: number
    readonly country: string
    readonly slogan: string
    readonly genre: string[]
    readonly duration: number

    constructor(id: number, name: string, price: number, year: number, country: string, slogan: string, genre: string[], duration: number) {
        this.id = id
        this.name = name
        this.price = price
        this.year = year
        this.country = country
        this.slogan = slogan
        this.genre = genre
        this.duration = duration
    }
}
