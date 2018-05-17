import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from "../services/auth";
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import * as firebase from 'firebase'
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any
  signinPage = SigninPage
  signupPage = SignupPage
  listPage = ListPage
  isAuthenticated = false

  @ViewChild('nav') nav: NavController;
  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private menuCtrl: MenuController,
    private authService: AuthService) {

      firebase.initializeApp({
        apiKey: "AIzaSyBABKi1BFgwBDFfgW_U3jS57kfPdDLrowg",
        authDomain: "cornell-mrmilk.firebaseapp.com"
      });



    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.rootPage = HomePage;

      this.statusBar.styleDefault();
      this.splashScreen.hide();

      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.isAuthenticated = true;
          this.rootPage = HomePage;
        } else {
          this.isAuthenticated = false;
          this.rootPage = SigninPage;
        }
      });
    });


  }

  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  onLogout() {
    this.authService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(SigninPage);
  }
}
