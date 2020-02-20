import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProduitsTabPage } from './produits-tab.page';

const routes: Routes = [
  {
    path: '',
    component: ProduitsTabPage,
    children:[
      {path: '', redirectTo: 'categories', pathMatch:'full'},
      {path: 'produits/:categorieId', loadChildren: './produits/produits.module#ProduitsPageModule'},
      {path: 'categories', loadChildren: './categories/categories.module#CategoriesPageModule'}
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
  declarations: [ProduitsTabPage]
})
export class ProduitsTabPageModule {}
