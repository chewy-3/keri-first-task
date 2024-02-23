import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickupComponentComponent } from './pickup-component.component';

const routes: Routes = [
  {
    path: '',
    component: PickupComponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickupComponentComponentRoutingModule {}
