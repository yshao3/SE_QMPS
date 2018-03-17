import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StripPage } from './strip';

@NgModule({
  declarations: [
    StripPage,
  ],
  imports: [
    IonicPageModule.forChild(StripPage),
  ],
})
export class StripPageModule {}
