import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsommationFacturePageRoutingModule } from './consommation-facture-routing.module';

import { ConsommationFacturePage } from './consommation-facture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsommationFacturePageRoutingModule
  ],
  declarations: [ConsommationFacturePage]
})
export class ConsommationFacturePageModule {}
