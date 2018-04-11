
import { Item } from "../models/teat";
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { AuthService } from "../services/auth";

@Injectable()
export class TeatService {
    private items: Item[] = [];

    constructor(private http: Http,
        private authService: AuthService) {}

       addItem(farm: string,
        date: string,
        time: string,
        observer: string,
        milker: string,
        clean: number,
        deep_present: number,
        small_dirt: number,
        large_dirt: number) {
            this.items.push(new Item(farm, date, time, observer, milker, clean, deep_present, small_dirt, large_dirt));
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
        milker: string,
        clean: number,
        deep_present: number,
        small_dirt: number,
        large_dirt: number) {
            this.items[index] = new Item(farm, date, time, observer, milker, clean, deep_present, small_dirt, large_dirt);
       }

       removeItem(index: number) {
           this.items.splice(index, 1);
       }

       storeList(token: string) {
           //overwrite the existing item
           //post: add your item to existing
           const userId = this.authService.getActiveUser().uid;
           return this.http
                .post('https://cornell-mrmilk.firebaseio.com/' + userId + '/strip.json?auth=' + token, this.items)
                .map((response: Response) => {
                    return response.json();
                });
       }
}