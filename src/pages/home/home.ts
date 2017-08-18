import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { GameMenu } from '../game-menu/game-menu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  choosen(age){
    this.navCtrl.push(GameMenu,{
      age:age
    });
    console.log(age);

  }

}
