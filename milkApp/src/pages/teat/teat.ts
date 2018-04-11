import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { TeatService } from '../../services/teat';
import { AuthService } from "../../services/auth";
import { DatabaseProvider } from '../../providers/database/database';
import { Http } from "@angular/http";
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-teat',
  templateUrl: 'teat.html'
})
export class TeatPage {
  public clean: number = 0;
  public deepPresent: number = 0;
  public smallDirt: number = 0;
  public largeDirt: number = 0;
  public farm: string = "";
  public myDate: string = moment().format();
  public observer: string = "";
  public milker: string = "";

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
      this.deepPresent = Math.max(this.deepPresent-1,0)
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
      this.deepPresent++
    } else if(param==3){
      this.smallDirt++
    } else if(param==4){
      this.largeDirt++
    }
  }
  saveData() {
    let alert = this.alerCtrl.create({
      title: 'Saved!',
      message: 'Data have been saved locally!',
      buttons: ['Ok']
    });
    //add new item
    this.teatService.updateItems(0,
      this.farm, 
      this.myDate, 
      this.myDate,
      this.observer, 
      this.milker, 
      this.clean, 
      this.deepPresent,
      this.smallDirt,
      this.largeDirt
    );

    console.log("浏览器存储:")
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

    //local storage to sqlite
    this.pushTeatData();
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
    this.clean = 0
    this.deepPresent = 0
    this.smallDirt = 0
    this.largeDirt = 0
    this.farm = ""
    this.myDate = moment().format()
    this.observer = ""
    this.milker = ""
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeatPage');
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
    this.database.addTeatData(this.farm, this.myDate, this.myDate, this.observer, this.milker, this.clean, this.deepPresent, this.smallDirt, this.largeDirt)
      .then((data) => {
        this.loadTeatData();
        console.log("当前传输的一条数据:")
        console.log(data);
      }, (error) => {
        console.log(error);
      });
  }

}
