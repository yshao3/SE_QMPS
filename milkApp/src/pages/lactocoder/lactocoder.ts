import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-lactocoder',
  templateUrl: 'lactocoder.html',
})
export class LactocoderPage {
  farm: string = ""
  myDate: string = moment().format()
  parlor: string = ""
  pre_milking: string = ""
  herd_size: string = ""
  size: string = ""
  procedures: string = ""
  frequency: string = "frequency2X"
  operators: string = ""
  prep: string = ""
  routine: string = ""


  cowName1: string = ""
  milk1: string = ""
  remark1: string = ""
  timer1: string = "Dip"
  cowList1: number[] = []
  DLU1: number[] = []

  cowName2: string = ""
  milk2: string = ""
  remark2: string = ""
  timer2: string = "Dip"
  cowList2: number[] = []
  DLU2: number[] = []

  cowName3: string = ""
  milk3: string = ""
  remark3: string = ""
  timer3: string = "Dip"
  cowList3: number[] = []
  DLU3: number[] = []

  constructor( public alerCtrl: AlertController) {
  }

  timer(e,param: number,timer: string){
    if(timer!="Finished"){
      if(param==1){
        this.cowList1.push(+moment().format("X"))
        if(this.cowList1.length==3){
          this.DLU1.push(this.cowList1[2]-this.cowList1[0])
        } else if(this.cowList1.length==4){
          this.DLU1.push(+this.cowList1[3]-this.cowList1[1])
        } else if(this.cowList1.length==5){
          this.DLU1.push(+this.cowList1[4]-this.cowList1[3])
        }
        console.log(this.cowList1)
        console.log(this.DLU1)
      } else if(param==2){
        this.cowList2.push(+moment().format("X"))
        if(this.cowList2.length==3){
          this.DLU2.push(this.cowList2[2]-this.cowList2[0])
        } else if(this.cowList2.length==4){
          this.DLU2.push(this.cowList2[3]-this.cowList2[1])
        } else if(this.cowList2.length==5){
          this.DLU2.push(this.cowList2[4]-this.cowList2[3])
        }
        console.log(this.cowList2)
        console.log(this.DLU2)
      } else if(param==3){
        this.cowList3.push(+moment().format("X"))
        if(this.cowList3.length==3){
          this.DLU3.push(this.cowList3[2]-this.cowList3[0])
        } else if(this.cowList3.length==4){
          this.DLU3.push(this.cowList3[3]-this.cowList3[1])
        } else if(this.cowList3.length==5){
          this.DLU3.push(this.cowList3[4]-this.cowList3[3])
        }
        console.log(this.cowList3)
        console.log(this.DLU3)
      }
    }
    if(timer=="Dip"){
      timer = "Strip"
    } else if(timer=="Strip"){
      timer = "Wipe"
    } else if(timer=="Wipe"){

      timer = "Attach"
    } else if(timer=="Attach"){
      timer = "Remove"
    } else if(timer=="Remove"){
      timer = "Finished"
    }
    if(param==1){
      this.timer1 = timer
    } else if(param==2){
      this.timer2 = timer
    } else if(param==3){
      this.timer3 = timer
    }
  }

  saveForm() {
    this.cowName1 = ""
    this.milk1 = ""
    this.remark1 = ""
    this.timer1 = "Dip"
    this.cowList1 = []


    this.cowName2 = ""
    this.milk2 = ""
    this.remark2 = ""
    this.timer2 = "Dip"
    this.cowList2 = []

    this.cowName3 = ""
    this.milk3 = ""
    this.remark3 = ""
    this.timer3 = "Dip"
    this.cowList3 = []
  }
  submitForm() {
    let alert = this.alerCtrl.create({
      title: 'Submitted!',
      message: 'Data have been submitted!',
      buttons: ['Ok']
    });
    alert.present()

    this.farm = ""
    this.myDate = moment().format()
    this.parlor = ""
    this.pre_milking = ""
    this.herd_size = ""
    this.size = ""
    this.procedures = ""
    this.frequency = "frequency2X"
    this.operators = ""
    this.prep = ""
    this.routine = ""
  }

}
