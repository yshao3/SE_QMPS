import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { TeatService } from '../../services/teat';
import { AuthService } from "../../services/auth";
import { Http } from "@angular/http";
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-teat',
  templateUrl: 'teat.html',
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
  constructor(public alerCtrl: AlertController,
    private teatService: TeatService,
    private http: Http,
    private authService: AuthService) {

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

    //pushing data to database
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

}
