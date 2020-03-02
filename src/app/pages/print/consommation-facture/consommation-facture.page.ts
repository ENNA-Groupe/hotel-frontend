import { Component, OnInit, Input } from '@angular/core';
import { PrintService } from 'src/app/services/print.service';
import { ConsommationService } from 'src/app/services/consommation.service';
import { ActivatedRoute } from '@angular/router';
import { Consommation } from 'src/app/models/consommation.model';
import { Client } from 'src/app/models/client.model';
import { ProduitService } from 'src/app/services/produit.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-consommation-facture',
  templateUrl: './consommation-facture.page.html',
  styleUrls: ['./consommation-facture.page.scss'],
})
export class ConsommationFacturePage implements OnInit {

consommationId: number;
consommation: Consommation;
client: Client;

  constructor(
    private printService: PrintService,
    private consommationService: ConsommationService,
    private locationService: LocationService,
    private produitService: ProduitService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let data = this.route.snapshot.params['consommationId']; 
    this.consommationId = + data[0];
    console.log('print :',this.consommationId);
    this.consommation = this.consommationService.getConsommation(this.consommationId);
    console.log(this.consommation);
    if (this.consommation.clientId) this.client = this.locationService.getClient(this.consommation.clientId);
    this.printService.onDataReady();
  }

  getCategorie(id){
    return this.produitService.getCategorie(id).nom;
  }

}
