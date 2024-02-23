import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DropOffComponent } from './drop-off.component';

const routes: Routes = [
  {
    path: '',
    component: DropOffComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DropOffComponentRoutingModule {}
