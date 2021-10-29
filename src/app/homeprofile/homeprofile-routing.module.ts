import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeprofilePage } from './homeprofile.page';

const routes: Routes = [
  {
    path: '',
    component: HomeprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeprofilePageRoutingModule {}
