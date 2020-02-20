import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChambresTabPage } from './chambres-tab.page';

const routes: Routes = [
  {
    path: '',
    component: ChambresTabPage,
    children:[
      {path: '', redirectTo: 'types', pathMatch:'full'},
      {path: 'chambres/:typeId', loadChildren: './chambres/chambres.module#ChambresPageModule'},
      {path: 'types', loadChildren: './types/types.module#TypesPageModule'}
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
  declarations: [ChambresTabPage]
})
export class ChambresTabPageModule {}
