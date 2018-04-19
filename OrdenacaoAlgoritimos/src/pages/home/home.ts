import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  aboutPage: any;
  
  constructor(public navCtrl: NavController) {
    this.aboutPage = AboutPage;
  }
  Estrutura(){
    this.navCtrl.push(this.aboutPage, {
            userData: "xxx"
        });
  }
}
