import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UsersTabPage } from './users-tab.page';

const routes: Routes = [
  {
    path: '',
    component: UsersTabPage,
    children:[
      {path: '', redirectTo: 'fonctions', pathMatch:'full'},
      {path: 'users/:fonctionId', loadChildren: './users/users.module#UsersPageModule'},
      {path: 'fonctions', loadChildren: './fonctions/fonctions.module#FonctionsPageModule'}
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
  declarations: [UsersTabPage]
})
export class UsersTabPageModule {}
