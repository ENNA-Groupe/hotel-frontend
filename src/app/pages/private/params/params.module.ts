import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ParamsPage } from './params.page';

const routes: Routes = [
  {
    path: '',
    component: ParamsPage,
    children: [
      {path: '', redirectTo: 'controls', pathMatch: 'full'},
      { path: 'proprietes', loadChildren: './propriete/propriete.module#ProprietePageModule' },
      { path: 'profil', loadChildren: './profil/profil.module#ProfilPageModule' },
      { path: 'controls', loadChildren: './controls/controls.module#ControlsPageModule' },
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
  declarations: [ParamsPage]
})
export class ParamsPageModule {}
