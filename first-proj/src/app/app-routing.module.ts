import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'customer-booking',
    loadChildren: () =>
      import('./customer-booking/customer-booking.module').then(
        (m) => m.CustomerBookingPageModule
      ),
  },
  {
    path: '',
    component: TabsPage, // Load the TabsPage component for the root route
    children: [
      {
        path: 'tab1',
        loadChildren: () =>
          import('./tab1/tab1.module').then((m) => m.Tab1PageModule),
      },
      {
        path: 'tab2',
        loadChildren: () =>
          import('./tab2/tab2.module').then((m) => m.Tab2PageModule),
      },
      {
        path: 'tab3',
        loadChildren: () =>
          import('./tab3/tab3.module').then((m) => m.Tab3PageModule),
      },
    ],
  },
  {
    path: 'ongoing-etric',
    loadChildren: () =>
      import('./ongoing-etric/ongoing-etric.module').then(
        (m) => m.OngoingEtricPageModule
      ),
  },
  {
    path: 'rating-page',
    loadChildren: () => import('./rating-page/rating-page.module').then( m => m.RatingPagePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
