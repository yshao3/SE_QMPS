import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from "../../services/auth";
import { LoadingController, AlertController } from "ionic-angular";

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})

/*
* The signin page required the email and password of user to log in
*/
export class SigninPage {
    constructor(private authService: AuthService,
      private loadingCtrl: LoadingController,
      private alertCtrl: AlertController) {
      }
    onSignin(form: NgForm) {
      alert("Welcome " + form.value.email + " , happy milking!");
      const loading = this.loadingCtrl.create({
        content: 'Signing you in...'
      });
      loading.present();

      this.authService.signin(form.value.email, form.value.password)
	  	.then(data => {
	  		loading.dismiss();
	  	})
	  	.catch(error => {
	  		loading.dismiss();
	  		const alert = this.alertCtrl.create({
	  			title: 'Signin failed!',
	  			message: error.message,
	  			buttons: ['Ok']
	  		});
	  		alert.present();
	  	});
    }
}
