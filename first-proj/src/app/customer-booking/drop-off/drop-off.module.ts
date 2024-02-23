import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DropOffComponent } from './drop-off.component';
import { DropOffComponentRoutingModule } from './drop-off-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DropOffComponentRoutingModule,
  ],
  declarations: [DropOffComponent],
})
export class DropOffComponentModule {}
