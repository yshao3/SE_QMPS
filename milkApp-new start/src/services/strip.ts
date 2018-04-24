import { Item } from "../models/strip";
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { AuthService } from "../services/auth";

@Injectable()
export class StripService {
    private items: Item[] = [];

    constructor(private http: Http,
        private authService: AuthService) {}
       addItem(farm: string,
        date: string,
        observer: string,
        stall_no: string,
        volume: string,
        balance: string) {
            this.items.push(new Item(farm, date, observer, stall_no, volume, balance));
            console.log(this.items);
       }

       getItems() {
           return this.items.slice();
       }

       updateItems(index: number,
        farm: string,
        date: string,
        observer: string,
        stall_no: string,
        volume: string,
        balance: string) {
            this.items[index] = new Item(farm, date, observer, stall_no, volume, balance);
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
