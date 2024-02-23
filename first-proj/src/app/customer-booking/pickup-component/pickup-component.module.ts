import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PickupComponentComponent } from './pickup-component.component';
import { PickupComponentComponentRoutingModule } from './pickup-component-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickupComponentComponentRoutingModule,
  ],
  declarations: [PickupComponentComponent],
})
export class PickupComponentComponentModule {}
