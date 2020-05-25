import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BulkPage } from './bulk';

@NgModule({
  declarations: [
    BulkPage,
  ],
  imports: [
    IonicPageModule.forChild(BulkPage),
  ],
})
export class BulkPageModule {}
