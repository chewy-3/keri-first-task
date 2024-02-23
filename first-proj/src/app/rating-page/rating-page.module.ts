import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RatingPagePageRoutingModule } from './rating-page-routing.module';

import { RatingPagePage } from './rating-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatingPagePageRoutingModule
  ],
  declarations: [RatingPagePage]
})
export class RatingPagePageModule {}
