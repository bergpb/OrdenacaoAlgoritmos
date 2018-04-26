import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalMisturaAplicacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-mistura-aplicacao',
  templateUrl: 'modal-mistura-aplicacao.html',
})
export class ModalMisturaAplicacaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalFilaCodigoPage');
  }
   closeModal() {
    this.viewCtrl.dismiss();
  }

}
