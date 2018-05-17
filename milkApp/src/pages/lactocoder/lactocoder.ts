import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LactocoderService } from '../../services/lactocoder';
import { AuthService } from "../../services/auth";
import { DatabaseProvider } from '../../providers/database/database';
import { Http } from "@angular/http";
import * as moment from 'moment';
import { ListPage } from '../../pages/list/list';

@IonicPage()
@Component({
  selector: 'page-lactocoder',
  templateUrl: 'lactocoder.html',
})

/*
* The lactocoder form
*/
export class LactocoderPage {
  // data in the form
  public farm: string
  public myDate: string
  public parlor: string
  public pre_milking: string
  public herd_size: string
  public size: string
  public procedures: string
  public frequency: string
  public operators: string
  public prep: string
  public routine: string
  // data in the form (with array types)
  public cowName: string[]
  public milk: string[]
  public remark: string[]
  public cowList: number[][]
  public buttons: boolean[][]

  // arrays to store time intervals short for Dip contact time, Lag contact time, Unit on time
  public DLU: number[][]

  // for user test display in html
  public ListUser : any

  // for global storage
  public listMap: any

  // construct the data by reading from global or initialize with default value
  constructor(public alerCtrl: AlertController,
    private lactocoderService: LactocoderService,
    private http: Http,
    private authService: AuthService,
    private database: DatabaseProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.farm = (navParams.get('lactoFarm') != undefined)?navParams.get('lactoFarm'):""
      this.myDate = (navParams.get('lactoDate') != undefined)?navParams.get('lactoDate'):moment().format('YYYY-MM-DD')
      this.parlor = (navParams.get('lactoParlor') != undefined)?navParams.get('lactoParlor'):""
      this.pre_milking = (navParams.get('lactoPre_Milking') != undefined)?navParams.get('lactoPre_Milking'):""
      this.herd_size = (navParams.get('lactoHerd') != undefined)?navParams.get('lactoHerd'):""
      this.size = (navParams.get('lactoSize') != undefined)?navParams.get('lactoSize'):""
      this.procedures = (navParams.get('lactoProcedures') != undefined)?navParams.get('lactoProcedures'):""
      this.frequency = (navParams.get('lactoFreq') != undefined)?navParams.get('lactoFreq'):"2X"
      this.operators = (navParams.get('lactoOp') != undefined)?navParams.get('lactoOp'):""
      this.prep = (navParams.get('lactoPrep') != undefined)?navParams.get('lactoPrep'):""
      this.routine = (navParams.get('lactoRoutine') != undefined)?navParams.get('lactoRoutine'):""

      this.cowName = (navParams.get('cowName') != undefined)?navParams.get('cowName'):["","",""]
      this.milk = (navParams.get('milk') != undefined)?navParams.get('milk'):["","",""]
      this.remark = (navParams.get('remark') != undefined)?navParams.get('remark'):["","",""]
      this.cowList = (navParams.get('cowList') != undefined)?navParams.get('cowList'):[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
      this.DLU = (navParams.get('DLU') != undefined)?navParams.get('DLU'):[[0,0,0],[0,0,0],[0,0,0]]
      this.buttons = (navParams.get('buttons') != undefined)?navParams.get('buttons'):[[false,false,true,true,true],[false,false,true,true,true],[false,false,true,true,true]]
  }

  // adjust buttons and also store time slots or time intervals into corresponding lists
  buttonControl(cow: number, step: number){
    this.cowList[cow][step] = +moment().format("X")
    this.buttons[cow][step] = true

    if(step==0){
      this.buttons[cow][2] = false
    } else if(step==1){
      if(this.cowList[cow][2]==0){
        this.buttons[cow][3] = false
      }
    } else if(step==2){
      this.DLU[cow][0] = (this.cowList[cow][2]-this.cowList[cow][0])
      if(this.cowList[cow][1]==0){
        this.buttons[cow][3] = false
      }
    } else if(step==3){
      if(this.cowList[cow][1]==0){
        this.DLU[cow][1] = (+this.cowList[cow][3]-this.cowList[cow][2])
      } else{
        this.DLU[cow][1] = (+this.cowList[cow][3]-this.cowList[cow][1])
      }
      this.buttons[cow][4] = false
    } else if(step==4){
      this.DLU[cow][2] = (+this.cowList[cow][4]-this.cowList[cow][3])
    }
  }

  // save the data both in online firebase and into local storage
  saveData() {
    // first clear the local Service
    while(this.lactocoderService.getItems().length>0){
        this.lactocoderService.removeItem(this.lactocoderService.getItems().length-1);
    }
    // back up the data in firebase (unabled when without network)
    for(var i = 0; i < 3; i++){
      if(!(this.cowName[i]==="")){
        this.lactocoderService.addItem(
          this.farm,
          this.myDate,
          this.parlor,
          this.pre_milking,
          this.herd_size,
          this.size,
          this.procedures,
          this.frequency,
          this.operators,
          this.prep,
          this.routine,
          this.cowName[i],
          this.milk[i],
          this.remark[i],
          this.DLU[i][0],
          this.DLU[i][1],
          this.DLU[i][2]
        );
      }
    }
    //pushing data to firebase database
    this.authService.getActiveUser().getIdToken()
      .then(
        (token: string) => {
          this.lactocoderService.storeList(token)
            .subscribe(
              () => console.log('Success!'),
              error => {
                console.log(error);
              }
            );
        }
      );

    //save it to local storage (sqlite)
    this.pushLactocoderData();

    // reset flexible data to default
    this.cowList= [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
    this.DLU = [[0,0,0],[0,0,0],[0,0,0]]
    this.buttons= [[false,false,true,true,true],[false,false,true,true,true],[false,false,true,true,true]]

    this.cowName = ["","",""]
    this.milk = ["","",""]
    this.remark = ["","",""]

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
    console.log('ionViewDidLoad LactocoderPage');
  }

  // get the data out (for user test)
  loadLactocoderData() {
    this.database.getLactocoderData().then((data: any) => {
      this.ListUser = data
    }, (error) => {
      console.log(error);
    })
  }

  // push the data into local storage
  pushLactocoderData() {
    // check if each of the 3 cows was recorded by its name
    // if has been recorded, push it to local storage(sqlite)
    for(var i = 0; i < 3; i++){
      if(!(this.cowName[i]==="")) {
        this.database.addLactocoderData(this.farm,
          this.myDate,
          this.parlor,
          this.pre_milking,
          this.herd_size,
          this.size,
          this.procedures,
          this.frequency,
          this.operators,
          this.prep,
          this.routine,
          this.cowName[i],
          this.milk[i],
          this.remark[i],
          this.DLU[i][0],
          this.DLU[i][1],
          this.DLU[i][2])
          .then((data) => {
            // test by getting the data and displaying it in the top of app screen
            this.loadLactocoderData();
          }, (error) => {
            console.log(error);
          });
      }
    }
  }

  // pop the current form, and save all current data into global
  back() {
    this.listMap = NavParams
    this.listMap['lactoFarm'] = this.farm
    this.listMap['lactoDate'] = this.myDate
    this.listMap['lactoParlor'] = this.parlor
    this.listMap['lactoPre_Milking'] = this.pre_milking
    this.listMap['lactoHerd'] = this.herd_size
    this.listMap['lactoSize'] = this.size
    this.listMap['lactoProcedures'] = this.procedures
    this.listMap['lactoFreq'] = this.frequency
    this.listMap['lactoOp'] = this.operators
    this.listMap['lactoPrep'] = this.prep
    this.listMap['lactoRoutine'] = this.routine
    this.listMap['cowName'] = this.cowName
    this.listMap['milk'] = this.milk
    this.listMap['remark'] = this.remark
    this.listMap['cowList'] = this.cowList
    this.listMap['DLU'] = this.DLU
    this.listMap['buttons'] = this.buttons

    this.navCtrl.pop();
  }

}
