import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeatService } from '../../services/teat';
import { HygieneService } from '../../services/hygiene';
import { AlignmentService } from '../../services/alignment';
import { PostmilkService } from '../../services/postmilk';
import { StripService } from '../../services/strip';
import { LactocoderService } from '../../services/lactocoder';
import { DatabaseProvider } from '../../providers/database/database';
import { Http, Response, Headers } from "@angular/http";
import { AuthService } from "../../services/auth";
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

/*
* The homepage
*/
export class HomePage {
  public ListUser: any;
  public success = ["false","false","false","false","false","false"];

  constructor(public navCtrl: NavController,
    private database: DatabaseProvider,
    private teatService: TeatService,
    private hygieneService: TeatService,
    private alignmentService: TeatService,
    private postmilkService: TeatService,
    private http: Http,
    private stripService: TeatService,
    private lactocoderService: TeatService,
    private authService: AuthService,
    private alerCtrl: AlertController,) {
  }

  public items = this.teatService.getItems();
  public email: string;
  public password: string;


  // getInfo() {
  //     // this.email = this.authService.email;
  //     // this.password = this.authService.password;
  //     // if (this.email != null && this.password != null) {
  //     //  this.pushUserData();
  //     // }
  //     // this.loadUserData();
  //     this.loadUserData();
  //     return this.ListUser;
  // }

  //manually clear the data
  clearData() {
      let alert = this.alerCtrl.create({
        title: 'Clean all the data',
        message: 'Are you sure to clean all the data?',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              this.database.cleanTeatData();
              this.database.cleanAlignmentData();
              this.database.cleanHygieneData();
              this.database.cleanStripData();
              this.database.cleanPostmilkData();
              this.database.cleanLactocoderData();
            }
          },
          {
            text: 'Cancel',
            role: 'cancel'
          }
        ]
      });
      alert.present();
  }

  triggerSubmitData() {
    let alert = this.alerCtrl.create({
      title: 'Submit all the data',
      message: 'Are you sure to submit all the data?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.submitData();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    alert.present();
  }

  submitData() {
    //get user info
    this.loadUserData();
    this.loadUserData();
    //push teat
    console.log(this.ListUser);

    this.database.getTeatData().then((data: any) => {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('username', this.ListUser[0].email);
    headers.append('password', this.ListUser[0].password);

    this.http.post('http://localhost:3000/teat', JSON.stringify(data), {headers:headers}).subscribe(response =>{
      this.success[0] = response.text();
      if (response.text() == "true"){
        // this.database.cleanTeatData();
    }});

    }, (error) => {
      console.log(error);
    })

    //push align
    this.database.getAlignmentData().then((data: any) => {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('username', this.ListUser[0].email);
    headers.append('password', this.ListUser[0].password);
    this.http.post('http://localhost:3000/unit', JSON.stringify(data), {headers:headers}).subscribe(response => {
      this.success[1] = response.text();
      if (response.text() == "true"){

        //  this.database.cleanAlignmentData();
    }
    });
    }, (error) => {
      console.log(error);
    })

    //push udder
    this.database.getHygieneData().then((data: any) => {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('username', this.ListUser[0].email);
    headers.append('password', this.ListUser[0].password);
    this.http.post('http://localhost:3000/udder', JSON.stringify(data), {headers:headers}).subscribe(response => {
      this.success[2] = response.text();
      if (response.text() == "true"){
      // this.database.cleanHygieneData();
    }
    });
    }, (error) => {
      console.log(error);
    })

    //push strip
    this.database.getStripData().then((data: any) => {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('username', this.ListUser[0].email);
    headers.append('password', this.ListUser[0].password);
    this.http.post('http://localhost:3000/strip', JSON.stringify(data), {headers:headers}).subscribe(response => {
      this.success[3] = response.text();
      if (response.text() == "true"){
      // this.database.cleanStripData();
    }
    });
    }, (error) => {
      console.log(error);
    })

    //push post
    this.database.getPostmilkData().then((data: any) => {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('username', this.ListUser[0].email);
    headers.append('password', this.ListUser[0].password);
    this.http.post('http://localhost:3000/post', JSON.stringify(data), {headers:headers}).subscribe(response => {
      this.success[4] = response.text();
      if (response.text() == "true"){

      // this.database.cleanPostmilkData();
    }
    });
    }, (error) => {
      console.log(error);
    })

    //push latco
    this.database.getLactocoderData().then((data: any) => {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('username', this.ListUser[0].email);
    headers.append('password', this.ListUser[0].password);
    this.http.post('http://localhost:3000/latco', JSON.stringify(data), {headers:headers}).subscribe(response => {
      this.success[5] = response.text();
      if (response.text() == "true"){

      // this.database.cleanLactocoderData();
    }
    });
    }, (error) => {
      console.log(error);
    })

    this.setAlert(this.success);

  }

  setAlert(success: any) {
    let alertSuccess = this.alerCtrl.create({
      title: 'Submitted!',
      message: 'Data have been submitted successfully!',
      buttons: ['Ok']
    });

    let alertError = this.alerCtrl.create({
      title: 'Error!',
      message: 'Please try again.',
      buttons: ['Ok']
    });
    for (var i = 0; i < success.length; i++) {
      if (success[i] == "false") {
        console.log(i);
        alertError.present();
        return;
      }
    }
    alertSuccess.present();
  }

  loadUserData() {
    this.database.getUserInfo().then((data: any) => {
      console.log("数据库里的数据:")
      console.log(JSON.stringify(data))
      this.ListUser = data
    }, (error) => {
      console.log(JSON.stringify(error));
    })
  }

  pushUserData() {
      this.database.addUserInfo(this.email, this.password)
          .then((data) => {
          console.log("当前传输的一条数据:")
          console.log(JSON.stringify(data));
          }, (error) => {
          console.log(JSON.stringify(error));
      });
  }

}
