import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LactocoderService } from '../../services/lactocoder';
import { AuthService } from "../../services/auth";
import { DatabaseProvider } from '../../providers/database/database';
import { Http } from "@angular/http";
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-lactocoder',
  templateUrl: 'lactocoder.html',
})
export class LactocoderPage {
  public farm: string = ""
  public myDate: string = moment().format()
  public parlor: string = ""
  public pre_milking: string = ""
  public herd_size: string = ""
  public size: string = ""
  public procedures: string = ""
  public frequency: string = "frequency2X"
  public operators: string = ""
  public prep: string = ""
  public routine: string = ""

  public cowName1: string = ""
  public milk1: string = ""
  public remark1: string = ""

  public cowName2: string = ""
  public milk2: string = ""
  public remark2: string = ""

  public cowName3: string = ""
  public milk3: string = ""
  public remark3: string = ""

  public cowList: number[][] = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
  public DLU: number[][] = [[0,0,0],[0,0,0],[0,0,0]]
  public buttons: boolean[][] = [[false,false,true,true,true],[false,false,true,true,true],[false,false,true,true,true]]

  constructor(public alerCtrl: AlertController,
    private lactocoderService: LactocoderService,
    private http: Http,
    private authService: AuthService,
    private database: DatabaseProvider) {
  }

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
    console.log(this.cowList[cow])
    console.log(this.DLU[cow])
  }

  saveData() {

    let alert = this.alerCtrl.create({
      title: 'Saved!',
      message: 'Data have been saved locally!',
      buttons: ['Ok']
    });

    while(this.lactocoderService.getItems().length>0){
        this.lactocoderService.removeItem(this.lactocoderService.getItems().length-1);
    }

    if(!(this.cowName1==="")){
      console.log("store1")
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
        this.cowName1,
        this.milk1,
        this.remark1,
        this.DLU[0][0],
        this.DLU[0][1],
        this.DLU[0][2]
      );
    }

    if(!(this.cowName2==="")){
      console.log("store2")
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
        this.cowName2,
        this.milk2,
        this.remark2,
        this.DLU[1][0],
        this.DLU[1][1],
        this.DLU[1][2]
      );
    }

    if(!(this.cowName3==="")){
      console.log("store3")
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
        this.cowName3,
        this.milk3,
        this.remark3,
        this.DLU[2][0],
        this.DLU[2][1],
        this.DLU[2][2]
      );


    }

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

    console.log("浏览器存储:")
    //console.log(Object.entries(this.teatService.getItems()));
    console.log(this.lactocoderService.getItems()[0].farm);

    //pushing data to firebase database




    this.cowList= [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
    this.DLU = [[0,0,0],[0,0,0],[0,0,0]]
    this.buttons= [[false,false,true,true,true],[false,false,true,true,true],[false,false,true,true,true]]

    this.cowName1 = ""
    this.milk1 = ""
    this.remark1 = ""



    this.cowName2 = ""
    this.milk2 = ""
    this.remark2 = ""

    this.cowName3 = ""
    this.milk3 = ""
    this.remark3 = ""
  }

}
