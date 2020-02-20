import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConsommationTabPage } from './consommation-tab.page';

const routes: Routes = [
  {
    path: '',
    component: ConsommationTabPage,
    children:[
      {path: '', redirectTo: 'consommation', pathMatch:'full'},
      {path: 'tables', loadChildren: './tables/tables.module#TablesPageModule'},
      {path: 'consommation', loadChildren: './consommation/consommation.module#ConsommationPageModule'}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConsommationTabPage]
})
export class ConsommationTabPageModule {}
