import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { CustomerBookingPageModule } from '../customer-booking/customer-booking.module';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },

  {
    path: 'customer-booking',
    component: CustomerBookingPageModule,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab1PageRoutingModule {}
