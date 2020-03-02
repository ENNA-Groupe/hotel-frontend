import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Categorie } from 'src/app/models/categorie.model';
import { Produit } from 'src/app/models/produit.model';
import { ProduitService } from 'src/app/services/produit.service';
import { DataService } from 'src/app/services/data.service';
import { ModalController, NavParams } from '@ionic/angular';
import { ConsommationService } from 'src/app/services/consommation.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-consommation-form',
  templateUrl: './consommation-form.component.html',
  styleUrls: ['./consommation-form.component.scss'],
})
export class ConsommationFormComponent implements OnInit, OnDestroy {

  categorieSubscription: Subscription;
  categories: Categorie[];

  produitSubscription: Subscription;
  produits: any[];
  produitsArray: any[] = [];
  typeClient:string = "anonyme";
  clientId: number;
  subs1: Subscription;
  consommationId: number;
  n: number =0;

  slidesOptions = {
    initialSlide: 0,
    spaceBetween: 4,
    slidesPerView: 4,
    breakpoints: {
      // when window width is >= 320px
      385: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1.5,
        spaceBetween: 1
      },
      // when window width is >= 640px
      765: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 3,
        spaceBetween: 10
      }
      // freeMode: true,
    }
  };

  numeroTable: number;

  constructor(
    private modalController: ModalController,
    private produitService: ProduitService,
    private locationService: LocationService,
    private navParams:NavParams,
    private consommationService: ConsommationService,
    private data: DataService,
  ) { }

  ngOnInit() {
    this.consommationId = this.navParams.get("consommationId");
    this.numeroTable = this.navParams.get("numeroTable"); 
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
    
  }

  ngOnDestroy(){
    this.categorieSubscription.unsubscribe();
    this.produitSubscription.unsubscribe();
  }

  onAdd(productId, prixUnitaire){
    let i = this.produitsArray.findIndex(item => item.productId === productId);
    let j = this.produits.findIndex(item => item.id===productId);
    if (i!=-1) {
      this.produitsArray[i].quantite++;
    } else {
      i = this.produitsArray.push({productId: productId, consommationId:this.consommationId , prixUnitaire: prixUnitaire,quantite: 1}) -1;
    }
    this.produits[j].quantite = this.produitsArray[i].quantite;
    this.n++;
  }

  onRemove(productId){
    let i = this.produitsArray.findIndex(item => item.productId === productId);
    if(i===-1) {
      window.alert("Il n'ya plus ce produit dans le panier!");
    } else {
      let j = this.produits.findIndex(item => item.id===productId);
      if (this.produitsArray[i].quantite>2) {
        this.produitsArray[i].quantite--;
        this.produits[j].quantite = this.produitsArray[i].quantite;
      } else {
        this.produitsArray.splice(i,1);
        this.produits[j].quantite = 0;
      }
      this.n--;
    }
  }

  onClose(){
    this.modalController.dismiss();
  }

  onValidate(){
    this.modalController.dismiss(this.produitsArray);
  }
}
