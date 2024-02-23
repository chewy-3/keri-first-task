import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CostsBreakdownPageRoutingModule } from './costs-breakdown-routing.module';

import { CostsBreakdownPage } from './costs-breakdown.page';
import { Tab2PageModule } from 'src/app/tab2/tab2.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CostsBreakdownPageRoutingModule,
    Tab2PageModule,
  ],
  declarations: [CostsBreakdownPage],
})
export class CostsBreakdownPageModule {}
