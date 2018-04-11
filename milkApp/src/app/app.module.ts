import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { SQLite } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../providers/database/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';

//table pages
import { TeatPage } from '../pages/teat/teat';
import { PostmilkPage } from '../pages/postmilk/postmilk';
import { HygienePage } from '../pages/hygiene/hygiene';
import { AlignmentPage } from '../pages/alignment/alignment';
import { StripPage } from '../pages/strip/strip';
import { LactocoderPage } from '../pages/lactocoder/lactocoder';
import { AuthService } from "../services/auth";
import { TeatService } from "../services/teat";
import { HygieneService } from "../services/hygiene";
import { AlignmentService } from "../services/alignment";
import { StripService } from "../services/strip";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SigninPage,
    SignupPage,
    TeatPage,
    HygienePage,
    AlignmentPage,
    StripPage,
    LactocoderPage,
    PostmilkPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SigninPage,
    SignupPage,
    TeatPage,
    HygienePage,
    AlignmentPage,
    StripPage,
    LactocoderPage,
    PostmilkPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    TeatService,
    HygieneService,
    AlignmentService,
    StripService,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    SQLitePorter,
    SQLite
  ]
})
export class AppModule {}
