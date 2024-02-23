import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OngoingEtricPage } from './ongoing-etric.page';

const routes: Routes = [
  {
    path: '',
    component: OngoingEtricPage,
  },
  {
    path: 'tab2',
    loadChildren: () =>
      import('../tab2/tab2.module').then((m) => m.Tab2PageModule),
  },
  {
    path: 'rating-page',
    loadChildren: () =>
      import('../rating-page/rating-page.module').then(
        (m) => m.RatingPagePageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OngoingEtricPageRoutingModule {}
