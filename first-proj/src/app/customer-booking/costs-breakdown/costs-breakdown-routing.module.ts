import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CostsBreakdownPage } from './costs-breakdown.page';

const routes: Routes = [
  {
    path: '',
    component: CostsBreakdownPage,
  },
  {
    path: 'ongoing-etric',
    loadChildren: () =>
      import('../../ongoing-etric/ongoing-etric.module').then(
        (m) => m.OngoingEtricPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CostsBreakdownPageRoutingModule {}
