import { Item } from "../models/alignment";
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { AuthService } from "../services/auth";

@Injectable()
export class AlignmentService {
    private items: Item[] = [];

    constructor(private http: Http,
        private authService: AuthService) {}
       addItem(farm: string,
        date: string,
        observer: string,
        good: number,
        bad: number) {
            this.items.push(new Item(farm, date, observer, good, bad));
            console.log(this.items);
       }

       getItems() {
           return this.items.slice();
       }

       updateItems(index: number,
        farm: string,
        date: string,
        observer: string,
        good: number,
        bad: number) {
            this.items[index] = new Item(farm, date, observer, good, bad);
       }

       removeItem(index: number) {
           this.items.splice(index, 1);
       }

       storeList(token: string) {
           //overwrite the existing item
           //post: add your item to existing
           const userId = this.authService.getActiveUser().uid;
           return this.http
                .post('https://cornell-mrmilk.firebaseio.com/' + userId + '/alignment.json?auth=' + token, this.items)
                .map((response: Response) => {
                    return response.json();
                });
       }
}
