import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import * as moment from 'moment';

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
  public farm: String = "";
  public myDate: String = moment().format();
  public observer: String = "";
  
  public group: String = "";
  public teatSkinLH: String = "teatSkinLH1";
  public teatSkinLF: String = "teatSkinLF1";
  public teatSkinRH: String = "teatSkinRH1";
  public teatSkinRF: String = "teatSkinRF1";

  public teatColorLH: String = "teatColorLH1";
  public teatColorLF: String = "teatColorLF1";
  public teatColorRH: String = "teatColorRH1";
  public teatColorRF: String = "teatColorRF1";

  public swellingLH: String = "swellingLH1";
  public swellingLF: String = "swellingLF1";
  public swellingRH: String = "swellingRH1";
  public swellingRF: String = "swellingRF1";

  public hardnessLH: String = "hardnessLH1";
  public hardnessLF: String = "hardnessLF1";
  public hardnessRH: String = "hardnessRH1";
  public hardnessRF: String = "hardnessRF1";

  public scoreLH: String = "scoreLH1";
  public scoreLF: String = "scoreLF1";
  public scoreRH: String = "scoreRH1";
  public scoreRF: String = "scoreRF1";


  constructor(public alerCtrl: AlertController ) {
  }

  saveForm(){
    this.group = "";
    this.teatSkinLH = "teatSkinLH1";
    this.teatSkinLF = "teatSkinLF1";
    this.teatSkinRH = "teatSkinRH1";
    this.teatSkinRF = "teatSkinRF1";

    this.teatColorLH = "teatColorLH1";
    this.teatColorLF = "teatColorLF1";
    this.teatColorRH = "teatColorRH1";
    this.teatColorRF = "teatColorRF1";

    this.swellingLH = "swellingLH1";
    this.swellingLF = "swellingLF1";
    this.swellingRH = "swellingRH1";
    this.swellingRF = "swellingRF1";

    this.hardnessLH = "hardnessLH1";
    this.hardnessLF = "hardnessLF1";
    this.hardnessRH = "hardnessRH1";
    this.hardnessRF = "hardnessRF1";

    this.scoreLH = "scoreLH1";
    this.scoreLF = "scoreLF1";
    this.scoreRH = "scoreRH1";
    this.scoreRF = "scoreRF1";
  }
  submitForm(){
    let alert = this.alerCtrl.create({
      title: 'Submitted!',
      message: 'Data have been submitted!',
      buttons: ['Ok']
    });
    alert.present()
    this.saveForm()
    this.farm = ""
    this.myDate = moment().format()
    this.observer = ""
  }

}
