import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RidersPage } from './riders';

@NgModule({
  declarations: [
    RidersPage,
  ],
  imports: [
    IonicPageModule.forChild(RidersPage),
  ],
})
export class RidersPageModule {}
