import { Item } from "../models/postmilk";
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { AuthService } from "../services/auth";

@Injectable()
export class PostmilkService {
    private items: Item[] = [];

    constructor(private http: Http,
        private authService: AuthService) {}
       addItem(farm: string,
        date: string,
        observer: string,
        group: string,
        teatSkinLH: string,
        teatSkinLF: string,
        teatSkinRH: string,
        teatSkinRF: string,
        teatColorLH: string,
        teatColorLF: string,
        teatColorRH: string,
        teatColorRF: string,
        swellingLH: string,
        swellingLF: string,
        swellingRH: string,
        swellingRF: string,
        hardnessLH: string,
        hardnessLF: string,
        hardnessRH: string,
        hardnessRF: string,
        scoreLH: string,
        scoreLF: string,
        scoreRH: string,
        scoreRF: string) {
            this.items.push(new Item(farm, date, observer,group,teatSkinLH,teatSkinLF,teatSkinRH,teatSkinRF,teatColorLH,teatColorLF,teatColorRH,teatColorRF,swellingLH,swellingLF,swellingRH,swellingRF,hardnessLH,hardnessLF,hardnessRH,hardnessRF,scoreLH,scoreLF,scoreRH,scoreRF));
            console.log(this.items);
       }

       getItems() {
           return this.items.slice();
       }

       updateItems(
        index: number,
        farm: string,
        date: string,
        observer: string,
        group: string,
        teatSkinLH: string,
        teatSkinLF: string,
        teatSkinRH: string,
        teatSkinRF: string,

        teatColorLH: string,
        teatColorLF: string,
        teatColorRH: string,
        teatColorRF: string,

        swellingLH: string,
        swellingLF: string,
        swellingRH: string,
        swellingRF: string,

        hardnessLH: string,
        hardnessLF: string,
        hardnessRH: string,
        hardnessRF: string,

        scoreLH: string,
        scoreLF: string,
        scoreRH: string,
        scoreRF: string) {
            this.items[index] = new Item(farm, date, observer,group,teatSkinLH,teatSkinLF,teatSkinRH,teatSkinRF,teatColorLH,teatColorLF,teatColorRH,teatColorRF,swellingLH,swellingLF,swellingRH,swellingRF,hardnessLH,hardnessLF,hardnessRH,hardnessRF,scoreLH,scoreLF,scoreRH,scoreRF);
       }

       removeItem(index: number) {
           this.items.splice(index, 1);
       }

       storeList(token: string) {
           //overwrite the existing item
           //post: add your item to existing
           const userId = this.authService.getActiveUser().uid;
           return this.http
                .post('https://cornell-mrmilk.firebaseio.com/' + userId + '/postmilk.json?auth=' + token, this.items)
                .map((response: Response) => {
                    return response.json();
                });
       }
}
