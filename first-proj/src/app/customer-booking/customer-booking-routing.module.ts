import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerBookingPage } from './customer-booking.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerBookingPage,
  },

  {
    path: 'select-fav-rider',
    loadChildren: () =>
      import('./select-fav-rider/select-fav-rider.module').then(
        (m) => m.SelectFavRiderPageModule
      ),
  },

  {
    path: 'costs-breakdown',
    loadChildren: () =>
      import('./costs-breakdown/costs-breakdown.module').then(
        (m) => m.CostsBreakdownPageModule
      ),
  },
  {
    path: 'drop-off',
    loadChildren: () =>
      import('./drop-off/drop-off.module').then(
        (m) => m.DropOffComponentModule
      ),
  },
  {
    path: 'pick-up',
    loadChildren: () =>
      import('./pickup-component/pickup-component.module').then(
        (m) => m.PickupComponentComponentModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerBookingPageRoutingModule {}
