import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerBookingPageRoutingModule } from './customer-booking-routing.module';

import { CustomerBookingPage } from './customer-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerBookingPageRoutingModule,
  ],
  declarations: [CustomerBookingPage],
})
export class CustomerBookingPageModule {}
