import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrintPage } from './print.page';

const routes: Routes = [
  {
    path: '',
    component: PrintPage,
    children: [
      { path: 'consommation-facture/:consommationId',loadChildren: './consommation-facture/consommation-facture.module#ConsommationFacturePageModule' },
      { path: 'location-facture/:locationId',loadChildren: './location-facture/location-facture.module#LocationFacturePageModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrintPageRoutingModule {}
