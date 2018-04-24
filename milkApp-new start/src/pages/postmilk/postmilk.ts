import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import * as moment from 'moment';
import { PostmilkService } from '../../services/postmilk';
import { AuthService } from "../../services/auth";
import { DatabaseProvider } from '../../providers/database/database';
import { Http } from "@angular/http";


/**
 * Generated class for the PostmilkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-postmilk',
  templateUrl: 'postmilk.html',
})
export class PostmilkPage {
  public farm: string = ""
  public myDate: string = moment().format()
  public observer: string = ""

  public group: string = ""
  public teatSkinLH: string = "teatSkinLH1"
  public teatSkinLF: string = "teatSkinLF1"
  public teatSkinRH: string = "teatSkinRH1"
  public teatSkinRF: string = "teatSkinRF1"

  public teatColorLH: string = "teatColorLH1"
  public teatColorLF: string = "teatColorLF1"
  public teatColorRH: string = "teatColorRH1"
  public teatColorRF: string = "teatColorRF1"

  public swellingLH: string = "swellingLH1"
  public swellingLF: string = "swellingLF1"
  public swellingRH: string = "swellingRH1"
  public swellingRF: string = "swellingRF1"

  public hardnessLH: string = "hardnessLH1"
  public hardnessLF: string = "hardnessLF1"
  public hardnessRH: string = "hardnessRH1"
  public hardnessRF: string = "hardnessRF1"

  public scoreLH: string = "scoreLH1"
  public scoreLF: string = "scoreLF1"
  public scoreRH: string = "scoreRH1"
  public scoreRF: string = "scoreRF1"


  constructor(public alerCtrl: AlertController,
    private postmilkService: PostmilkService,
    private http: Http,
    private authService: AuthService,
    private database: DatabaseProvider ) {
  }

  saveData(){
    let alert = this.alerCtrl.create({
      title: 'Saved!',
      message: 'Data have been saved locally!',
      buttons: ['Ok']
    });

    //add Item
    this.postmilkService.updateItems(0,
      this.farm,
      this.myDate,
      this.observer,
      this.group,
      this.teatSkinLH,
      this.teatSkinLF,
      this.teatSkinRH,
      this.teatSkinRF,
      this.teatColorLH,
      this.teatColorLF,
      this.teatColorRH,
      this.teatColorRF,
      this.swellingLH,
      this.swellingLF,
      this.swellingRH,
      this.swellingRF,
      this.hardnessLH,
      this.hardnessLF,
      this.hardnessRH,
      this.hardnessRF,
      this.scoreLH,
      this.scoreLF,
      this.scoreRH,
      this.scoreRF,

    );

    console.log("浏览器存储:")
    //console.log(Object.entries(this.teatService.getItems()));
    console.log(this.postmilkService.getItems()[0].farm)

    //pushing data to firebase database
    this.authService.getActiveUser().getIdToken()
      .then(
        (token: string) => {
          this.postmilkService.storeList(token)
            .subscribe(
              () => console.log('Success!'),
              error => {
                console.log(error);
              }
            );
        }
      );

    //local storage to sqlite
    this.pushPostmilkData();

    this.teatSkinLH = "teatSkinLH1"
    this.teatSkinLF = "teatSkinLF1"
    this.teatSkinRH = "teatSkinRH1"
    this.teatSkinRF = "teatSkinRF1"

    this.teatColorLH = "teatColorLH1"
    this.teatColorLF = "teatColorLF1"
    this.teatColorRH = "teatColorRH1"
    this.teatColorRF = "teatColorRF1"

    this.swellingLH = "swellingLH1"
    this.swellingLF = "swellingLF1"
    this.swellingRH = "swellingRH1"
    this.swellingRF = "swellingRF1"

    this.hardnessLH = "hardnessLH1"
    this.hardnessLF = "hardnessLF1"
    this.hardnessRH = "hardnessRH1"
    this.hardnessRF = "hardnessRF1"

    this.scoreLH = "scoreLH1"
    this.scoreLF = "scoreLF1"
    this.scoreRH = "scoreRH1"
    this.scoreRF = "scoreRF1"
  }

}
