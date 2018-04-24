import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HygieneService } from '../../services/hygiene';
import { AuthService } from "../../services/auth";
import { DatabaseProvider } from '../../providers/database/database';
import { Http } from "@angular/http";
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-hygiene',
  templateUrl: 'hygiene.html',
})
export class HygienePage {
  public farm: string = ""
  public myDate: string = moment().format()
  public observer: string = ""
  public group: string = ""
  public clean: number = 0
  public slightlyDirt: number = 0
  public moderatelyDirt: number = 0
  public cakedOnDirt: number = 0
  private ListUser : any

  constructor(public alerCtrl: AlertController,
    private hygieneService: HygieneService,
    private http: Http,
    private authService: AuthService,
    private database: DatabaseProvider) {
  }


  tapDecrease(e,param:number){
    if(param==1){
      this.clean = Math.max(this.clean-1,0)
    } else if(param==2){
      this.slightlyDirt = Math.max(this.slightlyDirt-1,0)
    } else if(param==3){
      this.moderatelyDirt = Math.max(this.moderatelyDirt-1,0)
    } else if(param==4){
      this.cakedOnDirt = Math.max(this.cakedOnDirt-1,0)
    }

  }
  tapIncrease(e,param:number) {
    if(param==1){
      this.clean++
    } else if(param==2){
      this.slightlyDirt++
    } else if(param==3){
      this.moderatelyDirt++
    } else if(param==4){
      this.cakedOnDirt++
    }
  }
  saveData() {
    let alert = this.alerCtrl.create({
      title: 'Saved!',
      message: 'Data have been saved locally!',
      buttons: ['Ok']
    });
    this.hygieneService.updateItems(0,
      this.farm,
      this.myDate,
      this.observer,
      this.group,
      this.clean,
      this.slightlyDirt,
      this.moderatelyDirt,
      this.cakedOnDirt
    );

    console.log("浏览器存储:")
    //console.log(Object.entries(this.teatService.getItems()));
    console.log(this.hygieneService.getItems()[0].farm);

    //pushing data to firebase database
    this.authService.getActiveUser().getIdToken()
      .then(
        (token: string) => {
          this.hygieneService.storeList(token)
            .subscribe(
              () => console.log('Success!'),
              error => {
                console.log(error);
              }
            );
        }
      );

    //local storage to sqlite
    this.pushHygieneData();

    // empty the form
    this.farm = ""
    this.myDate = moment().format()
    this.observer = ""
    this.group = ""
    this.clean = 0
    this.slightlyDirt = 0
    this.moderatelyDirt = 0
    this.cakedOnDirt = 0

    alert.present()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HygienePage');
  }

  loadHygieneData() {
    this.database.getHygieneData().then((data: any) => {
      console.log("数据库里的数据:")
      console.log(data)
      this.ListUser = data;
    }, (error) => {
      console.log(error);
    })
  }

  pushHygieneData() {
    this.database.addHygieneData(this.farm, this.myDate, this.observer, this.group, this.clean, this.slightlyDirt, this.moderatelyDirt, this.cakedOnDirt)
      .then((data) => {
        this.loadHygieneData();
        console.log("当前传输的一条数据:")
        console.log(data);
      }, (error) => {
        console.log(error);
      });
  }

}
