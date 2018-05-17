import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import * as moment from 'moment';
import { PostmilkService } from '../../services/postmilk';
import { AuthService } from "../../services/auth";
import { DatabaseProvider } from '../../providers/database/database';
import { Http } from "@angular/http";
import { ListPage } from '../../pages/list/list';

@IonicPage()
@Component({
  selector: 'page-postmilk',
  templateUrl: 'postmilk.html',
})

/*
* The postmilk form
*/
export class PostmilkPage {
  // data in the form
  public farm: string
  public myDate: string
  public observer: string

  public group: string
  public teatSkinLH: string
  public teatSkinLF: string
  public teatSkinRH: string
  public teatSkinRF: string

  public teatColorLH: string
  public teatColorLF: string
  public teatColorRH: string
  public teatColorRF: string

  public swellingLH: string
  public swellingLF: string
  public swellingRH: string
  public swellingRF: string

  public hardnessLH: string
  public hardnessLF: string
  public hardnessRH: string
  public hardnessRF: string

  public scoreLH: string
  public scoreLF: string
  public scoreRH: string
  public scoreRF: string

  // for user test display in html
  private ListUser : any
  // for global storage
  public listMap: any

  // construct the data by reading from global or initialize with default value
  constructor(public alerCtrl: AlertController,
    private postmilkService: PostmilkService,
    private http: Http,
    private authService: AuthService,
    private database: DatabaseProvider,
    public navCtrl: NavController,
    public navParams: NavParams ) {
      this.farm = (navParams.get('postFarm') != undefined)?navParams.get('postFarm'):""
      this.myDate = (navParams.get('postDate') != undefined)?navParams.get('postDate'):moment().format('YYYY-MM-DD')
      this.observer = (navParams.get('postObserver') != undefined)?navParams.get('postObserver'):""

      this.group = (navParams.get('postGroup') != undefined)?navParams.get('postGroup'):""

      this.teatSkinLH = (navParams.get('skinLH') != undefined)?navParams.get('skinLH'):"N"
      this.teatSkinLF = (navParams.get('skinLF') != undefined)?navParams.get('skinLF'):"N"
      this.teatSkinRH = (navParams.get('skinRH') != undefined)?navParams.get('skinRH'):"N"
      this.teatSkinRF = (navParams.get('skinRF') != undefined)?navParams.get('skinRF'):"N"

      this.teatColorLH = (navParams.get('colorLH') != undefined)?navParams.get('colorLH'):"N"
      this.teatColorLF = (navParams.get('colorLF') != undefined)?navParams.get('colorLF'):"N"
      this.teatColorRH = (navParams.get('colorRH') != undefined)?navParams.get('colorRH'):"N"
      this.teatColorRF = (navParams.get('colorRF') != undefined)?navParams.get('colorRF'):"N"

      this.swellingLH = (navParams.get('swellingLH') != undefined)?navParams.get('swellingLH'):"N"
      this.swellingLF = (navParams.get('swellingLF') != undefined)?navParams.get('swellingLF'):"N"
      this.swellingRH = (navParams.get('swellingRH') != undefined)?navParams.get('swellingRH'):"N"
      this.swellingRF = (navParams.get('swellingRF') != undefined)?navParams.get('swellingRF'):"N"

      this.hardnessLH = (navParams.get('hardnessLH') != undefined)?navParams.get('hardnessLH'):"N"
      this.hardnessLF = (navParams.get('hardnessLF') != undefined)?navParams.get('hardnessLF'):"N"
      this.hardnessRH = (navParams.get('hardnessRH') != undefined)?navParams.get('hardnessRH'):"N"
      this.hardnessRF = (navParams.get('hardnessRF') != undefined)?navParams.get('hardnessRF'):"N"

      this.scoreLH = (navParams.get('scoreLH') != undefined)?navParams.get('scoreLH'):"N"
      this.scoreLF = (navParams.get('scoreLF') != undefined)?navParams.get('scoreLF'):"N"
      this.scoreRH = (navParams.get('scoreRH') != undefined)?navParams.get('scoreRH'):"N"
      this.scoreRF = (navParams.get('scoreRF') != undefined)?navParams.get('scoreRF'):"N"
  }

  // save the data both in online firebase and into local storage
  saveData(){
    // back up the data in firebase (unabled when without network)
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

    //save it to local storage (sqlite)
    this.pushPostmilkData();

    // reset flexible data to default
    this.teatSkinLH = "N"
    this.teatSkinLF = "N"
    this.teatSkinRH = "N"
    this.teatSkinRF = "N"

    this.teatColorLH = "N"
    this.teatColorLF = "N"
    this.teatColorRH = "N"
    this.teatColorRF = "N"

    this.swellingLH = "N"
    this.swellingLF = "N"
    this.swellingRH = "N"
    this.swellingRF = "N"

    this.hardnessLH = "N"
    this.hardnessLF = "N"
    this.hardnessRH = "N"
    this.hardnessRF = "N"

    this.scoreLH = "N"
    this.scoreLF = "N"
    this.scoreRH = "N"
    this.scoreRF = "N"

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
    console.log('ionViewDidLoad PostmilkPage');
  }

  // get the data out (for user test)
  loadPostmilkData() {
    this.database.getPostmilkData().then((data: any) => {
      this.ListUser = data
    }, (error) => {
      console.log(error);
    })
  }

  // push the data into local storage
  pushPostmilkData() {
    this.database.addPostmilkData(this.farm,
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
      this.scoreRF)
      .then((data) => {
        // test by getting the data and displaying it in the top of app screen
        this.loadPostmilkData();
      }, (error) => {
        console.log(error);
      });
  }

  // pop the current form, and save all current data into global
  back() {
    this.listMap = NavParams
    this.listMap['postFarm'] = this.farm
    this.listMap['postDate'] = this.myDate
    this.listMap['postObserver'] = this.observer
    this.listMap['postGroup'] = this.group

    this.listMap['skinLH'] = this.teatSkinLH
    this.listMap['skinLF'] = this.teatSkinLF
    this.listMap['skinRH'] = this.teatSkinRH
    this.listMap['skinRF'] = this.teatSkinRF

    this.listMap['colorLH'] = this.teatColorLH
    this.listMap['colorLF'] = this.teatColorLF
    this.listMap['colorRH'] = this.teatColorRH
    this.listMap['colorRF'] = this.teatColorRF

    this.listMap['swellingLH'] = this.swellingLH
    this.listMap['swellingLF'] = this.swellingLF
    this.listMap['swellingRH'] = this.swellingRH
    this.listMap['swellingRF'] = this.swellingRF

    this.listMap['hardnessLH'] = this.hardnessLH
    this.listMap['hardnessLF'] = this.hardnessLF
    this.listMap['hardnessRH'] = this.hardnessRH
    this.listMap['hardnessRF'] = this.hardnessRF

    this.listMap['scoreLH'] = this.scoreLH
    this.listMap['scoreLF'] = this.scoreLF
    this.listMap['scoreRH'] = this.scoreRH
    this.listMap['scoreRF'] = this.scoreRF

    this.navCtrl.pop();
  }
}
