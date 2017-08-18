import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameMenu } from './game-menu';

@NgModule({
  declarations: [
    GameMenu,
  ],
  imports: [
    IonicPageModule.forChild(GameMenu),
  ],
  exports: [
    GameMenu
  ]
})
export class GameMenuModule {}
