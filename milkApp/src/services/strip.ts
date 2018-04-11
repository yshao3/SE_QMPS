import { Item } from "../models/strip";

export class StripService {
    private items: Item[] = [];

    constructor() {}
       addItem(farm: string,
        date: string,
        time: string,
        observer: string,
        stall_no: string,
        volume: string,
        balance: string) {
            this.items.push(new Item(farm, date, time, observer, stall_no, volume, balance));
            console.log(this.items);
       }

       getItems() {
           return this.items.slice();
       }

       updateItems(index: number,
        farm: string,
        date: string,
        time: string,
        observer: string,
        stall_no: string,
        volume: string,
        balance: string) {
            this.items[index] = new Item(farm, date, time, observer, stall_no, volume, balance);
       }

       removeItem(index: number) {
           this.items.splice(index, 1);
       }
}