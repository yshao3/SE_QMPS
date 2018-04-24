import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostmilkPage } from './postmilk';

@NgModule({
  declarations: [
    PostmilkPage,
  ],
  imports: [
    IonicPageModule.forChild(PostmilkPage),
  ],
})
export class PostmilkPageModule {}
