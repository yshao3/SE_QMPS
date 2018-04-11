import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HygienePage } from './hygiene';

@NgModule({
  declarations: [
    HygienePage,
  ],
  imports: [
    IonicPageModule.forChild(HygienePage),
  ],
})
export class HygienePageModule {}
