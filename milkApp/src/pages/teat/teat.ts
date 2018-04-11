import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { AlertController } from 'ionic-angular';
import { TeatService } from '../../services/teat';
import { AuthService } from "../../services/auth";
import { DatabaseProvider } from '../../providers/database/database';
import { Http } from "@angular/http";
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-teat',
  templateUrl: 'teat.html',
})
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

  constructor(public alerCtrl: AlertController,
    private teatService: TeatService,
    private http: Http,
    private authService: AuthService,
    private sqlite: SQLite,
    private database: DatabaseProvider) {
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
      this.observer,
      this.milker,
      this.clean,
      this.dipPresent,
      this.smallDirt,
      this.largeDirt,
      this.beforeAfter
    );
    console.log(this.teatService.getItems());
    alert.present()
  }
  submitData() {
    let alert = this.alerCtrl.create({
      title: 'Submitted!',
      message: 'Data have been submitted!',
      buttons: ['Ok']
    });
    alert.present()

    //pushing data to sqlite databse
    this.database.addTeatData(
      this.farm,
      this.myDate,
      this.observer,
      this.milker,
      this.clean,
      this.dipPresent,
      this.smallDirt,
      this.largeDirt,
      this.beforeAfter).then((data) => {
        console.log(data);
      }, (error) => {
        console.log(error);
      });

    //pushing data to firebase database
    this.authService.getActiveUser().getToken()
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

}
