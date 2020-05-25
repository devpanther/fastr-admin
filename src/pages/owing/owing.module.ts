import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OwingPage } from './owing';

@NgModule({
  declarations: [
    OwingPage,
  ],
  imports: [
    IonicPageModule.forChild(OwingPage),
  ],
})
export class OwingPageModule {}
