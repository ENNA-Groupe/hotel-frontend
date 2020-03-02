import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationFacturePage } from './location-facture.page';

const routes: Routes = [
  {
    path: '',
    component: LocationFacturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationFacturePageRoutingModule {}
