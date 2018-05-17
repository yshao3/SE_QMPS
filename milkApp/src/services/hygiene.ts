import { Item } from "../models/hygiene";
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { AuthService } from "../services/auth";

@Injectable()
export class HygieneService {
    private items: Item[] = [];

    constructor(private http: Http,
        private authService: AuthService) {}
       addItem(farm: string,
        date: string,
        observer: string,
        group: string,
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
        group: string,
        clean: number,
        slightly_present: number,
        moderately_dirt: number,
        caked_on_dirt: number) {
            this.items[index] = new Item(farm, date, observer,group, clean, slightly_present, moderately_dirt, caked_on_dirt);
       }

       removeItem(index: number) {
           this.items.splice(index, 1);
       }

       storeList(token: string) {
           //overwrite the existing item
           //post: add your item to existing
           const userId = this.authService.getActiveUser().uid;
           return this.http
                .post('https://cornell-mrmilk.firebaseio.com/' + userId + '/hygiene.json?auth=' + token, this.items)
                .map((response: Response) => {
                    return response.json();
                });
       }
}
