import { v4 as uuidv4 } from 'uuid';

class Item {
    private _id: string;
    private _name: string;
    private _price: number;
    private _description: string;

constructor(name: string, price: number, description: string) {
    this._id = uuidv4();
    this._name = name;
    this._price = price;
    this._description = description;
}

get id(): string {
    return this._id;
}

get name(): string {
    return this._name;
}

get price(): number {
    return this._price;
}

get description(): string {
    return this._description;
}
}

class User {
    private _id: string;
    private _name: string;
    private _age: number;
    private _cart: Item[];

constructor(name: string, age: number) {
    this._id = uuidv4();
    this._name = name;
    this._age = age;
    this._cart = [];
}

get id(): string {
    return this._id;
}

get name(): string {
    return this._name;
}

get age(): number {
    return this._age;
}

get cart(): Item[] {
    return this._cart;
}

addToCart(item: Item): void {
    this._cart.push(item);
}

removeFromCart(item: Item): void {
    this._cart = this._cart.filter((cartItem) => cartItem.id !== item.id);
}

removeQuantityFromCart(item: Item, quantity: number): void {
    const itemsToRemove = this._cart.filter((cartItem) => cartItem.id === item.id).slice(0, quantity);
    this._cart = this._cart.filter((cartItem) => !itemsToRemove.includes(cartItem));
}

cartTotal(): number {
    return this._cart.reduce((total, item) => total + item.price, 0);
}

printCart(): void {
    console.log(`Cart for ${this.name}:`);
    this._cart.forEach((item) => {
        console.log(`- ${item.name} (${item.price})`);
    });
}
}

class Shop {
    private _items: Item[];

constructor() {
    this._items = [
    new Item('T-Shirt', 20, 'A comfortable cotton t-shirt'),
    new Item('Jeans', 50, 'A pair of stylish jeans'),
    new Item('Sneakers', 80, 'A pair of trendy sneakers'),
    ];
}

get items(): Item[] {
    return this._items;
}
}

export { Item, User, Shop };
