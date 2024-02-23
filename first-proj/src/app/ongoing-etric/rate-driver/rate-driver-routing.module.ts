import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RateDriverPage } from './rate-driver.page';

const routes: Routes = [
  {
    path: '',
    component: RateDriverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RateDriverPageRoutingModule {}
