import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Categorie } from 'src/app/models/categorie.model';
import { Produit } from 'src/app/models/produit.model';
import { ProduitService } from 'src/app/services/produit.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { ConsommationService } from 'src/app/services/consommation.service';
import { Table } from 'src/app/models/table.model';
import { Consommation } from 'src/app/models/consommation.model';

@Component({
  selector: 'app-consommation-form',
  templateUrl: './consommation-form.component.html',
  styleUrls: ['./consommation-form.component.scss'],
})
export class ConsommationFormComponent implements OnInit, OnDestroy {

  categorieSubscription: Subscription;
  categories: Categorie[];

  produitSubscription: Subscription;
  produits: Produit[];

  table: Table;
  consommation: Consommation;
  consommationId: number;
  produitsArray: any[] = [];

  constructor(
    private modalController: ModalController,
    private produitService: ProduitService,
    private navParams:NavParams,
    private consommationService: ConsommationService,
    private data: DataService,
  ) { }

  ngOnInit() {
    this.categorieSubscription =  this.produitService.getCategories().subscribe(
      (res: Categorie[]) => {
        this.categories = [];
        res.forEach(
          item => {
            if (!item.isIntrant) this.categories.push(item);
          }
        );
      }
    );
    this.produitSubscription =  this.produitService.getProduits().subscribe(
      (res: Produit[]) => {
        this.produits = res.map((item: any)=>{ 
          item.quantite=0
          return item;
        });
      }
    );

    let tableId = this.navParams.get('tableId');
    this.consommationId = this.navParams.get('consommationId');
    if (this.consommationId) {
     this.consommation = this.consommationService.getConsommation(this.consommationId);
     this.consommationService.getConsommationProduits(this.consommationId).then(
       (res: any[]) => {
        this.produitsArray = res;
       }
     );
    } else {
      this.produitsArray = [];
    }
   
  }

  ngOnDestroy(){
    this.categorieSubscription.unsubscribe();
    this.produitSubscription.unsubscribe();
  }

  onAdd(produitId, prixUnitaire,   quantite){
    if (quantite>0) {
     let i = this.produitsArray.findIndex(item => item.produitId === produitId);
      if (i!=-1) {
        this.produitsArray[i].quantite = quantite;
      } else {
        this.produitsArray.push({produitId: produitId, consommationId:this.consommationId , prixUnitaire: prixUnitaire,quantite: quantite})
      }
    }
  }

  reset(){
   this.consommationService.getConsommationProduits(this.consommation.id).then(
     (res: any[]) => {
       this.produitsArray = res;
     }
   );
  }

  onClose(){
    this.modalController.dismiss(this.produitsArray);
  }
}
