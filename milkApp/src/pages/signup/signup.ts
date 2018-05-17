import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from "../../services/auth";
import { LoadingController, AlertController } from "ionic-angular";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

/*
* The signup page
*/
export class SignupPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private authService: AuthService) {

  }
	onSignup(form: NgForm) {
		const loading = this.loadingCtrl.create({
			content: 'Signing you up...'
		});
		loading.present();
	  this.authService.signup(form.value.email, form.value.password)
	  	.then(data => {
	  		loading.dismiss();
	  	})
	  	.catch(error => {
	  		loading.dismiss();
	  		const alert = this.alertCtrl.create({
	  			title: 'Signup failed!',
	  			message: error.message,
	  			buttons: ['Ok']
	  		});
	  		alert.present();
	  	});
	}

}
