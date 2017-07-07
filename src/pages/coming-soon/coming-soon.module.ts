import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComingSoonPage } from './coming-soon';

@NgModule({
  declarations: [
    ComingSoonPage,
  ],
  imports: [
    IonicPageModule.forChild(ComingSoonPage),
  ],
  exports: [
    ComingSoonPage
  ]
})
export class ComingSoonPageModule {}
