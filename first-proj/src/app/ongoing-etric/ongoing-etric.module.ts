import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OngoingEtricPageRoutingModule } from './ongoing-etric-routing.module';

import { OngoingEtricPage } from './ongoing-etric.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OngoingEtricPageRoutingModule
  ],
  declarations: [OngoingEtricPage]
})
export class OngoingEtricPageModule {}
