import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalBolhaAplicacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-bolha-aplicacao',
  templateUrl: 'modal-bolha-aplicacao.html',
})
export class ModalBolhaAplicacaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalFilaCodigoPage');
  }
   closeModal() {
    this.viewCtrl.dismiss();
  }

}
