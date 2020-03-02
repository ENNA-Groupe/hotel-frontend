import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrivatePage } from './private.page';

const routes: Routes = [
  {
    path: '',
    component: PrivatePage,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard',   loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
      { path: 'users', loadChildren: './users/users.module#UsersPageModule' },
      {path: 'locations',   loadChildren: './location/location.module#LocationPageModule'},
      { path: 'chambres', loadChildren: './chambres/chambres.module#ChambresPageModule' },
      { path: 'intrants', loadChildren: './intrants/intrants.module#IntrantsPageModule' },
      { path: 'params', loadChildren: './params/params.module#ParamsPageModule' },
      { path: 'produits', loadChildren: './produits/produits.module#ProduitsPageModule' },
      { path: 'consommations', loadChildren: './consommations/consommations.module#ConsommationsPageModule' },
      { path: 'entrees', loadChildren: './entrees/entrees.module#EntreesPageModule' },
      { path: 'fournisseurs', loadChildren: './fournisseurs/fournisseurs.module#FournisseursPageModule' },
      { path: 'sorties', loadChildren: './sorties/sorties.module#SortiesPageModule' },
      { path: 'clients', loadChildren: './clients/clients.module#ClientsPageModule' },
      { path: 'stats', loadChildren: './stats/stats.module#StatsPageModule' },
      { path: 'mesures', loadChildren: './mesures/mesures.module#MesuresPageModule'}
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
  declarations: [PrivatePage]
})
export class PrivatePageModule {}
