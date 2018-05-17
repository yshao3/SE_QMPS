import { Item } from "../models/lactocoder";
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { AuthService } from "../services/auth";

@Injectable()
export class LactocoderService {
    private items: Item[] = [];

    constructor(private http: Http,
        private authService: AuthService) {}
       addItem(farm: string,
         myDate: string,
         parlor: string,
         pre_milking: string,
         herd_size: string,
         size: string,
         procedures: string,
         frequency: string,
         operators: string,
         prep: string,
         routine: string,
         cowName: string,
         milk: string,
         remark: string,
         dipContact: number,
         lagTime: number,
         unitOn: number) {
            this.items.push(new Item(farm,myDate,parlor,pre_milking,herd_size,size,procedures,frequency,operators,prep,routine,cowName,milk,remark,dipContact,lagTime,unitOn));
            console.log(this.items);
       }

       getItems() {
           return this.items.slice();
       }

       updateItems(index: number,
         farm: string,
         myDate: string,
         parlor: string,
         pre_milking: string,
         herd_size: string,
         size: string,
         procedures: string,
         frequency: string,
         operators: string,
         prep: string,
         routine: string,
         cowName: string,
         milk: string,
         remark: string,
         dipContact: number,
         lagTime: number,
         unitOn: number) {
            this.items[index] = new Item(farm,myDate,parlor,pre_milking,herd_size,size,procedures,frequency,operators,prep,routine,cowName,milk,remark,dipContact,lagTime,unitOn);
       }

       removeItem(index: number) {
           this.items.splice(index, 1);
       }

       storeList(token: string) {
           //overwrite the existing item
           //post: add your item to existing
           const userId = this.authService.getActiveUser().uid;
           return this.http
                .post('https://cornell-mrmilk.firebaseio.com/' + userId + '/lactocoder.json?auth=' + token, this.items)
                .map((response: Response) => {
                    return response.json();
                });
       }
}
