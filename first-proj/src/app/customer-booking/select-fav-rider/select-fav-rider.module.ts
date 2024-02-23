import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectFavRiderPageRoutingModule } from './select-fav-rider-routing.module';

import { SelectFavRiderPage } from './select-fav-rider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectFavRiderPageRoutingModule
  ],
  declarations: [SelectFavRiderPage]
})
export class SelectFavRiderPageModule {}
