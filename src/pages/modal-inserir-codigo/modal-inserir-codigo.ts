import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalInserirCodigoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-inserir-codigo',
  templateUrl: 'modal-inserir-codigo.html',
})
export class ModalInserirCodigoPage {

 constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalFilaCodigoPage');
  }
   closeModal() {
    this.viewCtrl.dismiss();
  }

}