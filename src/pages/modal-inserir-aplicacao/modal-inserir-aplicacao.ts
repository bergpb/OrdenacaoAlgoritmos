import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

/**
 * Generated class for the ModalInserirAplicacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-inserir-aplicacao',
  templateUrl: 'modal-inserir-aplicacao.html',
})
export class ModalInserirAplicacaoPage {

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalInserirAplicacaoPage');
  }
closeModal() {
    this.viewCtrl.dismiss();
  }
}
