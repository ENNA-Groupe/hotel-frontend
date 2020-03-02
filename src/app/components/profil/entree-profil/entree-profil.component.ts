import { Component, OnInit } from '@angular/core';
import { Intrant } from 'src/app/models/intrant.model';
import { Categorie } from 'src/app/models/categorie.model';
import { Fournisseur } from 'src/app/models/fournisseur.model';
import { Subscription } from 'rxjs';
import { Entree } from 'src/app/models/entree.model';
import { ProduitService } from 'src/app/services/produit.service';
import { EntreeService } from 'src/app/services/entree.service';
import { AlertService } from 'src/app/services/alert.service';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-entree-profil',
  templateUrl: './entree-profil.component.html',
  styleUrls: ['./entree-profil.component.scss'],
})
export class EntreeProfilComponent implements OnInit {

  produits: Intrant[];
  categories: Categorie[];
  fournisseurs: Fournisseur[];
  title: string;
  sub1: Subscription;
  sub2: Subscription;
  sub3: Subscription;
  produitsArray : any[] =[];
  operation: any;
 item: Entree;
  constructor(
    public produitService: ProduitService,
    public entreeService: EntreeService,
    private alert: AlertService,
    private modalController: ModalController,
    public navParams: NavParams
  ) {
   
   }

  ngOnInit() {
    let id = this.navParams.get('id');
      this.sub1 = this.produitService.getCategories().subscribe(
        (cats) => {
          this.categories = cats
        }
      );
      this.sub2 =this.produitService.getIntrants().subscribe(
        (prods) => {
          this.produits = [];
          prods.forEach((item: any)=>{
            console.log(item);
            item.categorie = this.categories.find(cat=>cat.id===item.categorieId).nom;
            this.produits.push(item);
          });
        }
      )
      this.sub3 = this.entreeService.getFournisseurs().subscribe(
        (res) => {
          this.fournisseurs = res;
        }
      );

      if (id) {
        this.item = this.entreeService.getEntree(id);
        this.title = "Modification de l' entree numero "+this.item.numeroFacture;
        this.operation = {id:this.item.id, numeroFacture: this.item.numeroFacture, fournisseurId: this.item.fournisseurId,  montantTotal:this.item.montantTotal, montantPaye: this.item.montantPaye, reductions: this.item.reductions, autresFrais: this.item.autresFrais,createdAt:this.item.createdAt, deletedAt: this.item.deletedAt, updatedAt:this.item.updatedAt };
        this.entreeService.getEntreeProduits(this.item.id).then(
          (prod: any[]) => {
            console.log(prod);
            this.produitsArray = [];
            prod.map(item=>{
              let entity:any =this.produits.find(elem=> elem.id===item.produitId);
              item.nom = entity.categorie + ' ' + entity.nom;
              this.produitsArray.push(item);
            })
  
          }
        );
      } 
  
  }

  onClose() {
    this.modalController.dismiss();
  }

}