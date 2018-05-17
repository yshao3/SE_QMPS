import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AlignmentService } from '../../services/alignment';
import { AuthService } from "../../services/auth";
import { DatabaseProvider } from '../../providers/database/database';
import { Http } from "@angular/http";
import * as moment from 'moment';
import { ListPage } from '../../pages/list/list';

@IonicPage()
@Component({
  selector: 'page-alignment',
  templateUrl: 'alignment.html',
})

/*
* The alignment form
*/
export class AlignmentPage {
  // data in the form
  public farm: string
  public myDate: string
  public observer: string
  public good: number
  public bad: number

  // for user test display in html
  private ListUser : any

  // for global storage
  public listMap: any

  // construct the data by reading from global or initialize with default value
  constructor(public alerCtrl: AlertController,
    private http: Http,
    private navParams: NavParams,
    private alignmentService: AlignmentService,
    private authService: AuthService,
    private database: DatabaseProvider,
    public navCtrl: NavController) {
      this.farm = (navParams.get('alignmentFarm') != undefined)?navParams.get('alignmentFarm'):""
      this.myDate = (navParams.get('alignmentDate') != undefined)?navParams.get('alignmentDate'):moment().format('YYYY-MM-DD')
      this.observer = (navParams.get('alignmentObserver') != undefined)?navParams.get('alignmentObserver'):""
      this.good = (navParams.get('alignmentGood') != undefined)?navParams.get('alignmentGood'):0
      this.bad = (navParams.get('alignmentBad') != undefined)?navParams.get('alignmentBad'):0
    }

  // decrease the value of good/bad
  tapDecrease(e,param:number){
    if(param==1){
      this.good = Math.max(this.good-1,0)
    } else if(param==2){
      this.bad = Math.max(this.bad-1,0)
    }
  }

  // increase the value of good/bad
  tapIncrease(e,param:number) {
    if(param==1){
      this.good++
    } else if(param==2){
      this.bad++
    }
  }

  // save the data both in online firebase and into local storage
  saveData() {
    // back up the data in firebase (unabled when without network)
    this.alignmentService.updateItems(0,
      this.farm,
      this.myDate,
      this.observer,
      this.good,
      this.bad);

      this.authService.getActiveUser().getIdToken()
        .then(
          (token: string) => {
            this.alignmentService.storeList(token)
              .subscribe(
                () => console.log('Success!'),
                error => {
                  console.log(error);
                }
              );
          }
        );

    //save it to local storage (sqlite)
    this.pushAlignmentData();

    // reset flexible data to default
    this.good = 0
    this.bad = 0

    // alert
    let alert = this.alerCtrl.create({
      title: 'Saved!',
      message: 'Data have been saved locally!',
      buttons: ['Ok']
    });
    alert.present()
  }

  // alert when initiate this page
  ionViewDidLoad() {
    console.log('ionViewDidLoad AlignmentPage');
  }

  // get the data out (for user test)
  loadAlignmentData() {
    this.database.getAlignmentData().then((data: any) => {
      this.ListUser = data
    }, (error) => {
      console.log(error);
    })
  }

  // push the data into local storage
  pushAlignmentData() {
    this.database.addAlignmentData(this.farm,
      this.myDate,
      this.observer,
      this.good,
      this.bad)
      .then((data) => {
        // test by getting the data and displaying it in the top of app screen
        this.loadAlignmentData();
      }, (error) => {
        console.log(error);
      });
  }

  // pop the current form, and save all current data into global
  back() {
    this.listMap = NavParams
    this.listMap['alignmentFarm'] = this.farm
    this.listMap['alignmentDate'] = this.myDate
    this.listMap['alignmentObserver'] = this.observer
    this.listMap['alignmentGood'] = this.good
    this.listMap['alignmentBad'] = this.bad

    this.navCtrl.pop();
  }

}
