import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Injectable } from "@angular/core";
import { TeatService } from '../../services/teat';
import { AuthService } from "../../services/auth";
import { DatabaseProvider } from '../../providers/database/database';
import { Http, Response, Headers } from "@angular/http";
import * as moment from 'moment';
import {Observable} from 'rxjs/Rx';

@IonicPage()
@Component({
  selector: 'page-teat',
  templateUrl: 'teat.html'
})
@Injectable()

export class TeatPage {

  public farm: string = ""
  public myDate: string = moment().format()
  public observer: string = ""
  public milker: string = ""
  public clean: number = 0
  public dipPresent: number = 0
  public smallDirt: number = 0
  public largeDirt: number = 0
  public beforeAfter: string = "beforeAfter1"

  public items = {};
  public item  = {};
  

  constructor(public alerCtrl: AlertController,
    private teatService: TeatService,
    private http: Http,
    private authService: AuthService,
    private database: DatabaseProvider) {
      //this.loadTeatData();
  }
  tapDecrease(e,param:number){
    if(param==1){
      this.clean = Math.max(this.clean-1,0)
    } else if(param==2){
      this.dipPresent = Math.max(this.dipPresent-1,0)
    } else if(param==3){
      this.smallDirt = Math.max(this.smallDirt-1,0)
    } else if(param==4){
      this.largeDirt = Math.max(this.largeDirt-1,0)
    }

  }
  tapIncrease(e,param:number) {
    if(param==1){
      this.clean++
    } else if(param==2){
      this.dipPresent++
    } else if(param==3){
      this.smallDirt++
    } else if(param==4){
      this.largeDirt++
    }
    
//     var request = require("request");

// var options = { method: 'POST',
//   url: 'http://localhost:8080/mobile/teat',
//   headers: 
//    { 'Postman-Token': 'aa5a2d15-dc55-4bba-953e-93d3de53b7c5',
//      'Cache-Control': 'no-cache',
//      'Content-Type': 'application/json' },
//   body: 
//    [ { farm: 'is',
//        date: '2012-08-29',
//        observer: 'milker1',
//        milker: 'Bob',
//        clean: 20,
//        dip: 30,
//        smallDirt: 20,
//        largeDirt: 30,
//        isbefore: true },
//      { farm: 'are',
//        date: '2012-08-29',
//        observer: 'milker1',
//        milker: 'Bob',
//        clean: 20,
//        dip: 30,
//        smallDirt: 20,
//        largeDirt: 30,
//        isbefore: true } ],
//   json: true };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });
  var headers = new Headers();
    
    headers.append('Content-Type', 'application/json');
    this.http.post('http://localhost:8080/mobile/teat', JSON.stringify([{ farm: 'is',
       date: '2012-08-29',
       observer: 'milker1',
       milker: 'Bob',
       clean: 20,
       dip: 30,
       smallDirt: 20,
       largeDirt: 30,
       isbefore: true }]), {headers:headers}).map((response:Response) => {
                console.log(response);
                // response.json();
            }).subscribe();
  }
  saveData() {
    let alert = this.alerCtrl.create({
      title: 'Saved!',
      message: 'Data have been saved locally!',
      buttons: ['Ok']
    });
    // this.http.get('http://localhost:8080/Alltables').map((response:Response) => {
    //             console.log(response.json());
    //             response.json();
    //         }).subscribe();
    //add new item
    this.teatService.updateItems(0,
      this.farm,
      this.myDate,
      this.observer,
      this.milker,
      this.clean,
      this.dipPresent,
      this.smallDirt,
      this.largeDirt,
      this.beforeAfter
    );

    console.log("浏览器存储:")
    this.http.get('http://localhost:8080/Alltables')
            .map((response:Response) => {
                console.log(response.json());
                response.json();
            }).subscribe();
    console.log(this.teatService.getItems());
    alert.present()

    //pushing data to firebase database
    this.authService.getActiveUser().getIdToken()
      .then(
        (token: string) => {
          this.teatService.storeList(token)
            .subscribe(
              () => console.log('Success!'),
              error => {
                console.log(error);
              }
            );
        }
      );
    console.log("the student");
    
    //local storage to sqlite
    this.pushTeatData();
    // this.http.get('http://localhost:8080/Alltables')
    //         .map((response:Response) => {
    //             console.log(response.json());
    //             response.json();
    //         }).subscribe();

           //overwrite the existing item
           //post: add your item to existing
           // const userId = this.authService.getActiveUser().uid;
   
    
  }
  

  submitData() {
    let alert = this.alerCtrl.create({
      title: 'Submitted!',
      message: 'Data have been submitted!',
      buttons: ['Ok']
    });
    alert.present()

    //push data to eventual database when there is network
    
    //reset the data
    this.farm = ""
    this.myDate = moment().format()
    this.observer = ""
    this.milker = ""
    this.clean = 0
    this.dipPresent = 0
    this.smallDirt = 0
    this.largeDirt = 0
    this.beforeAfter = "beforeAfter1"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeatPage')
  }

  loadTeatData() {
    this.database.getTeatData().then((data) => {
      console.log("数据库里的数据:")
      console.log(data);

    }, (error) => {
      console.log(error);
    })
  }

  pushTeatData() {
    this.database.addTeatData(this.farm, this.myDate, this.myDate, this.observer, this.milker, this.clean, this.dipPresent, this.smallDirt, this.largeDirt)
      .then((data) => {
        this.loadTeatData();
        console.log("当前传输的一条数据:")
        console.log(data);
      }, (error) => {
        console.log(error);
      });
  }

}
