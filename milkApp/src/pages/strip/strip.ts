import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { StripService } from '../../services/strip';
import { AuthService } from "../../services/auth";
import { DatabaseProvider } from '../../providers/database/database';
import { Http } from "@angular/http";
import * as moment from 'moment';
import { ListPage } from '../../pages/list/list';

@IonicPage()
@Component({
  selector: 'page-strip',
  templateUrl: 'strip.html',
})

/*
* The strip form
*/
export class StripPage {
  // data in the form
  public farm: string
  public myDate: string
  public observer: string
  public stall: string
  public ml: string
  public balance: string

  // for user test display in html
  private ListUser : any

  // for global storage
  public listMap: any

  // construct the data by reading from global or initialize with default value
  constructor(public alerCtrl: AlertController,
    private stripService: StripService,
    private http: Http,
    private authService: AuthService,
    private database: DatabaseProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.farm = (navParams.get('stripFarm') != undefined)?navParams.get('stripFarm'):""
      this.myDate = (navParams.get('stripDate') != undefined)?navParams.get('stripDate'):moment().format('YYYY-MM-DD')
      this.observer = (navParams.get('stripObserver') != undefined)?navParams.get('stripObserver'):""
      this.stall = (navParams.get('stripStall') != undefined)?navParams.get('stripStall'):""
      this.ml = (navParams.get('stripML') != undefined)?navParams.get('stripML'):""
      this.balance = (navParams.get('stripBalance') != undefined)?navParams.get('stripBalance'):"balanced"
  }

  // save the data both in online firebase and into local storage
  saveData() {
    // back up the data in firebase (unabled when without network)
    this.stripService.updateItems(0,
      this.farm,
      this.myDate,
      this.observer,
      this.stall,
      this.ml,
      this.balance
    );

    //pushing data to firebase database
    this.authService.getActiveUser().getIdToken()
      .then(
        (token: string) => {
          this.stripService.storeList(token)
            .subscribe(
              () => console.log('Success!'),
              error => {
                console.log(error);
              }
            );
        }
      );

    //save it to local storage (sqlite)
    this.pushStripData();

    // reset flexible data to default
    this.stall = "";
    this.ml = "";
    this.balance = "balanced";

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
    console.log('ionViewDidLoad StripPage');
  }

  // get the data out (for user test)
  loadStripData() {
    this.database.getStripData().then((data: any) => {
      this.ListUser = data
    }, (error) => {
      console.log(error);
    })
  }

  // push the data into local storage
  pushStripData() {
    this.database.addStripData(this.farm,
      this.myDate,
      this.observer,
      this.stall,
      this.ml,
      this.balance)
      .then((data) => {
        // test by getting the data and displaying it in the top of app screen
        this.loadStripData();
      }, (error) => {
        console.log(error);
      });
  }

  // pop the current form, and save all current data into global
  back() {
    this.listMap = NavParams
    this.listMap['stripFarm'] = this.farm
    this.listMap['stripDate'] = this.myDate
    this.listMap['stripObserver'] = this.observer
    this.listMap['stripStall'] = this.stall
    this.listMap['stripML'] = this.ml
    this.listMap['stripBalance'] = this.balance

    this.navCtrl.pop();
  }
}
