import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { TeatService } from '../../services/teat';
import { AuthService } from "../../services/auth";
import { DatabaseProvider } from '../../providers/database/database';
import { Http, Response, Headers } from "@angular/http";
import * as moment from 'moment';
import { ListPage } from '../../pages/list/list';

@IonicPage()
@Component({
  selector: 'page-teat',
  templateUrl: 'teat.html'
})

/*
* The teat form
*/
export class TeatPage {
  // data in the form
  public farm: string
  public myDate: string
  public observer: string
  public milker: string
  public clean: number
  public dipPresent: number
  public smallDirt: number
  public largeDirt: number
  public beforeAfter: string

  // for user test display in html
  private ListUser : any

  // for global storage
  public listMap: any

  // construct the data by reading from global or initialize with default value
  constructor(public alerCtrl: AlertController,
    private teatService: TeatService,
    private http: Http,
    private authService: AuthService,
    private database: DatabaseProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.farm = (navParams.get('teatFarm') != undefined)?navParams.get('teatFarm'):""
      this.myDate = (navParams.get('teatDate') != undefined)?navParams.get('teatDate'):moment().format('YYYY-MM-DD')
      this.observer = (navParams.get('teatObserver') != undefined)?navParams.get('teatObserver'):""
      this.milker = (navParams.get('teatMilker') != undefined)?navParams.get('teatMilker'):""
      this.clean = (navParams.get('teatClean') != undefined)?navParams.get('teatClean'):0
      this.dipPresent = (navParams.get('teatDip') != undefined)?navParams.get('teatDip'):0
      this.smallDirt = (navParams.get('teatSmall') != undefined)?navParams.get('teatSmall'):0
      this.largeDirt = (navParams.get('teatLarge') != undefined)?navParams.get('teatLarge'):0
      this.beforeAfter = (navParams.get('teatBA') != undefined)?navParams.get('teatBA'):"b"
  }

  // decrease the value of data
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

  // increase the value of data
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

  // save the data both in online firebase and into local storage
  saveData() {
    // back up the data in firebase (unabled when without network)
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

    //pushing data to firebase database
    this.authService.getActiveUser().getIdToken()
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

    //save it to local storage (sqlite)
    this.pushTeatData();

    // reset flexible data to default
    this.clean = 0
    this.dipPresent = 0
    this.smallDirt = 0
    this.largeDirt = 0
    this.beforeAfter = "b"

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
    console.log('ionViewDidLoad TeatPage')
  }

  // get the data out (for user test)
  loadTeatData() {
    this.database.getTeatData().then((data: any) => {
      this.ListUser = data
    }, (error) => {
      console.log(error);
    })
  }

  // push the data into local storage
  pushTeatData() {
    this.database.addTeatData(this.farm,
      this.myDate,
      this.observer,
      this.milker,
      this.clean,
      this.dipPresent,
      this.smallDirt,
      this.largeDirt,
      this.beforeAfter)
      .then((data) => {
        // test by getting the data and displaying it in the top of app screen
        this.loadTeatData();
      }, (error) => {
        console.log(error);
      });
  }

  // pop the current form, and save all current data into global
  back() {
    this.listMap = NavParams
    this.listMap['teatFarm'] = this.farm
    this.listMap['teatDate'] = this.myDate
    this.listMap['teatObserver'] = this.observer
    this.listMap['teatMilker'] = this.milker
    this.listMap['teatClean'] = this.clean
    this.listMap['teatDip'] = this.dipPresent
    this.listMap['teatSmall'] = this.smallDirt
    this.listMap['teatLarge'] = this.largeDirt
    this.listMap['teatBA'] = this.beforeAfter

    this.navCtrl.pop();
  }

}
