import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeatPage } from '../teat/teat';
import { HygienePage } from '../hygiene/hygiene';
import { AlignmentPage } from '../alignment/alignment';
import { StripPage } from '../strip/strip';
import { PostmilkPage } from '../postmilk/postmilk';
import { LactocoderPage } from '../lactocoder/lactocoder';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  teatPage = TeatPage;
  hygienePage = HygienePage;
  alignmentPage = AlignmentPage;
  stripPage = StripPage;
  postmilkPage = PostmilkPage;
  lactocoderPage = LactocoderPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
