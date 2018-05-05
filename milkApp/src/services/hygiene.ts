import { Item } from "../models/hygiene";

export class HygieneService {
    private items: Item[] = [];

    constructor() {}
       addItem(farm: string,
        date: string,
        observer: string,
        group: number,
        clean: number,
        slightly_present: number,
        moderately_dirt: number,
        caked_on_dirt: number) {
            this.items.push(new Item(farm, date, observer,group, clean, slightly_present, moderately_dirt, caked_on_dirt));
            console.log(this.items);
       }

       getItems() {
           return this.items.slice();
       }

       updateItems(index: number,
        farm: string,
        date: string,
        observer: string,
        group: number,
        clean: number,
        slightly_present: number,
        moderately_dirt: number,
        caked_on_dirt: number
                    ) {
            this.items[index] = new Item(farm, date, observer,group, clean, slightly_present, moderately_dirt, caked_on_dirt);
       }

       removeItem(index: number) {
           this.items.splice(index, 1);
       }
}
