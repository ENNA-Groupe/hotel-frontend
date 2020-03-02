import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConsommationsPage } from './consommations.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { TableComponent } from 'src/app/components/items/table/table.component';
import { ProduitConsoComponent } from 'src/app/components/items/produit-conso/produit-conso.component';

const routes: Routes = [
  {
    path: '',
    component: ConsommationsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConsommationsPage, TableComponent, ProduitConsoComponent]
})
export class ConsommationsPageModule {}
