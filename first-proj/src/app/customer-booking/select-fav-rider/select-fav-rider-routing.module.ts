import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectFavRiderPage } from './select-fav-rider.page';

const routes: Routes = [
  {
    path: '',
    component: SelectFavRiderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectFavRiderPageRoutingModule {}
