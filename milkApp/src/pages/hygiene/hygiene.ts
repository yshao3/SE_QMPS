import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HygieneService } from '../../services/hygiene';
import { AuthService } from "../../services/auth";
import { DatabaseProvider } from '../../providers/database/database';
import { Http } from "@angular/http";
import * as moment from 'moment';
import { ListPage } from '../../pages/list/list';

@IonicPage()
@Component({
  selector: 'page-hygiene',
  templateUrl: 'hygiene.html',
})

/*
* The hygiene form
*/
export class HygienePage {
  // data in the form
  public farm: string
  public myDate: string
  public observer: string
  public group: string
  public clean: number
  public slightlyDirt: number
  public moderatelyDirt: number
  public cakedOnDirt: number

  // for user test display in html
  private ListUser : any

  // for global storage
  public listMap: any

  // construct the data by reading from global or initialize with default value
  constructor(public alerCtrl: AlertController,
    private hygieneService: HygieneService,
    private http: Http,
    private authService: AuthService,
    private database: DatabaseProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.farm = (navParams.get('hygieneFarm') != undefined)?navParams.get('hygieneFarm'):""
      this.myDate = (navParams.get('hygieneDate') != undefined)?navParams.get('hygieneDate'):moment().format('YYYY-MM-DD')
      this.observer = (navParams.get('hygieneObserver') != undefined)?navParams.get('hygieneObserver'):""
      this.group = (navParams.get('hygieneGroup') != undefined)?navParams.get('hygieneGroup'):""
      this.clean = (navParams.get('hygieneClean') != undefined)?navParams.get('hygieneClean'):0
      this.slightlyDirt = (navParams.get('hygieneSlightly') != undefined)?navParams.get('hygieneSlightly'):0
      this.moderatelyDirt = (navParams.get('hygieneModerately') != undefined)?navParams.get('hygieneModerately'):0
      this.cakedOnDirt = (navParams.get('hygieneCakedOn') != undefined)?navParams.get('hygieneCakedOn'):0
  }

  // decrease the value of data
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

  // increase the value of data
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

  // save the data both in online firebase and into local storage
  saveData() {
    // back up the data in firebase (unabled when without network)
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

    //save it to local storage (sqlite)
    this.pushHygieneData();

    // reset flexible data to default
    this.clean = 0
    this.slightlyDirt = 0
    this.moderatelyDirt = 0
    this.cakedOnDirt = 0

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
    console.log('ionViewDidLoad HygienePage');
  }

  // get the data out (for user test)
  loadHygieneData() {
    this.database.getHygieneData().then((data: any) => {
      this.ListUser = data
    }, (error) => {
      console.log(error);
    })
  }

  // push the data into local storage
  pushHygieneData() {
    this.database.addHygieneData(this.farm,
      this.myDate,
      this.observer,
      this.group,
      this.clean,
      this.slightlyDirt,
      this.moderatelyDirt,
      this.cakedOnDirt)
      .then((data) => {
        // test by getting the data and displaying it in the top of app screen
        this.loadHygieneData();
      }, (error) => {
        console.log(error);
      });
  }

  // pop the current form, and save all current data into global
  back() {
    this.listMap = NavParams
    this.listMap['hygieneFarm'] = this.farm
    this.listMap['hygieneDate'] = this.myDate
    this.listMap['hygieneObserver'] = this.observer
    this.listMap['hygieneGroup'] = this.group
    this.listMap['hygieneClean'] = this.clean
    this.listMap['hygieneSlightly'] = this.slightlyDirt
    this.listMap['hygieneModerately'] = this.moderatelyDirt
    this.listMap['hygieneCakedOn'] = this.cakedOnDirt

    this.navCtrl.pop();
  }

}
