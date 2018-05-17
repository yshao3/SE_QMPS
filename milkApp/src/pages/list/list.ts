import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeatPage } from '../teat/teat';
import { HygienePage } from '../hygiene/hygiene';
import { AlignmentPage } from '../alignment/alignment';
import { StripPage } from '../strip/strip';
import { PostmilkPage } from '../postmilk/postmilk';
import { LactocoderPage } from '../lactocoder/lactocoder';
import * as moment from 'moment';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

/*
* The list class for all forms
*/
export class ListPage {
  // initialize all forms
  teatPage = TeatPage
  hygienePage = HygienePage
  alignmentPage = AlignmentPage
  stripPage = StripPage
  postmilkPage = PostmilkPage
  lactocoderPage = LactocoderPage

  // for global storage
  public listMap: any

  // During the constructing process, set all inflexible data to default value
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.listMap = NavParams
    // set teat form to default value
    NavParams['teatFarm'] = ""
    NavParams['teatDate'] = moment().format('YYYY-MM-DD')
    NavParams['teatObserver'] = ""
    NavParams['teatMilker'] = ""
    // set hygiene form to default value
    NavParams['hygieneFarm'] = ""
    NavParams['hygieneDate'] = moment().format('YYYY-MM-DD')
    NavParams['hygieneObserver'] = ""
    NavParams['hygieneGroup'] = ""
    // set alignment form to default value
    NavParams['alignmentFarm'] = ""
    NavParams['alignmentDate'] = moment().format('YYYY-MM-DD')
    NavParams['alignmentObserver'] = ""
    // set strip form to default value
    NavParams['stripFarm'] = ""
    NavParams['stripDate'] = moment().format('YYYY-MM-DD')
    NavParams['stripObserver'] = ""
    // set postmilk form to default value
    NavParams['postFarm'] = ""
    NavParams['postDate'] = moment().format('YYYY-MM-DD')
    NavParams['postObserver'] = ""
    NavParams['postGroup'] = ""
    // set lactocoder form to default value
    NavParams['lactoFarm'] = ""
    NavParams['lactoDate'] = moment().format('YYYY-MM-DD')
    NavParams['lactoParlor'] = ""
    NavParams['lactoPre_Milking'] = ""
    NavParams['lactoHerd'] = ""
    NavParams['lactoSize'] = ""
    NavParams['lactoProcedures'] = ""
    NavParams['lactoFreq'] = ""
    NavParams['lactoOp'] = ""
    NavParams['lactoPrep'] = ""
    NavParams['lactoRoutine'] = ""
  }

  // push the listMap as parameter and go to teat page
  goTeat() {
    this.navCtrl.push(TeatPage, this.listMap);
  }
  // push the listMap as parameter and go to hygiene page
  goHygiene() {
    this.navCtrl.push(HygienePage, this.listMap);
  }
  // push the listMap as parameter and go to alignment page
  goAlignment(){
    this.navCtrl.push(AlignmentPage, this.listMap);
  }
  // push the listMap as parameter and go to strip page
  goStrip(){
    this.navCtrl.push(StripPage, this.listMap);
  }
  // push the listMap as parameter and go to postmilk page
  goPostmilk(){
    this.navCtrl.push(PostmilkPage, this.listMap);
  }
  // push the listMap as parameter and go to lactocoder page
  goLactocoder(){
    this.navCtrl.push(LactocoderPage, this.listMap);
  }
}
