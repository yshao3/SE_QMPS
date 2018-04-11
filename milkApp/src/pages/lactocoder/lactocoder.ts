import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-lactocoder',
  templateUrl: 'lactocoder.html',
})
export class LactocoderPage {
  myDate: String = moment().format();

  cowName1: String = ""
  milk1: String = ""
  remark1: String = ""
  timer1: String = "Start"
  cowList1: String[] = []
  timer1Current: String = ""


  cowName2: String = ""
  milk2: String = ""
  remark2: String = ""
  timer2: String = "Start"
  cowList2: String[] = []
  timer2Current: String = ""

  cowName3: String = ""
  milk3: String = ""
  remark3: String = ""
  timer3: String = "Start"
  cowList3: String[] = []
  timer3Current: String = ""

  private todo : FormGroup;

  constructor( public alerCtrl: AlertController, private formBuilder: FormBuilder ) {
    this.todo = this.formBuilder.group({
      farm:[''],
      parlor:[''],
      pre_milking:[''],
      herd_size:[''],
      size:[''],
      procedures:[''],
      frequency:[''],
      operators:[''],
      prep:[''],
      routine:[''],
    });
  }

  timer(e,param: number,timer: String){
    if(timer!="Finished"){
      if(param==1){
        this.cowList1.push(moment().format())
        this.timer1Current = this.cowList1[this.cowList1.length-1]
        console.log(this.cowList1)
      } else if(param==2){
        this.cowList2.push(moment().format())
        this.timer2Current = this.cowList2[this.cowList2.length-1]
        console.log(this.cowList2)
      } else if(param==3){
        this.cowList3.push(moment().format())
        this.timer3Current = this.cowList3[this.cowList3.length-1]
        console.log(this.cowList3)
      }
    }
    if(timer=="Start"){
      timer = "Dip"
    } else if(timer=="Dip"){
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
    this.timer1 = "Start"
    this.cowList1 = []
    this.timer1Current = ""


    this.cowName2 = ""
    this.milk2 = ""
    this.remark2 = ""
    this.timer2 = "Start"
    this.cowList2 = []
    this.timer2Current = ""

    this.cowName3 = ""
    this.milk3 = ""
    this.remark3 = ""
    this.timer3 = "Start"
    this.cowList3 = []
    this.timer3Current = ""
  }
  submitForm() {
    let alert = this.alerCtrl.create({
      title: 'Submitted!',
      message: 'Data have been submitted!',
      buttons: ['Ok']
    });
    alert.present()

    this.todo.reset()
    this.myDate = moment().format()
  }

}
