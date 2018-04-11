import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HygieneService } from '../../services/hygiene';
import * as moment from 'moment';

/**
 * Generated class for the HgyienePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hygiene',
  templateUrl: 'hygiene.html',
})
export class HygienePage {
  public farm: string = ""
  public myDate: string = moment().format()
  public observer: string = ""
  public group: number = 0
  public clean: number = 0
  public slightlyDirt: number = 0
  public moderatelyDirt: number = 0
  public cakedOnDirt: number = 0
  constructor(public alerCtrl: AlertController,
    private hygieneService: HygieneService) {

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
    console.log(this.hygieneService.getItems());
    alert.present()
  }
  submitData() {
    let alert = this.alerCtrl.create({
      title: 'Submitted!',
      message: 'Data have been submitted!',
      buttons: ['Ok']
    });
    alert.present()

    this.farm = ""
    this.myDate = moment().format()
    this.observer = ""
    this.group = 0
    this.clean = 0
    this.slightlyDirt = 0
    this.moderatelyDirt = 0
    this.cakedOnDirt = 0

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HygienePage');
  }

}
