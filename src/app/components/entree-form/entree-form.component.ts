import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Entree } from 'src/app/models/entree.model';
import { ProduitService } from 'src/app/services/produit.service';
import { ModalController, NavParams } from '@ionic/angular';
import { EntreeService } from 'src/app/services/entree.service';
import { Fournisseur } from 'src/app/models/fournisseur.model';
import { Intrant } from 'src/app/models/intrant.model';
import { Categorie } from 'src/app/models/categorie.model';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-entree-form',
  templateUrl: './entree-form.component.html',
  styleUrls: ['./entree-form.component.scss'],
})
export class EntreeFormComponent implements OnInit {
  produits: Intrant[];
  categories: Categorie[];
  fournisseurs: Fournisseur[];
  title = "Ajout d'une entree";
  sub1: Subscription;
  sub2: Subscription;
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
      this.produitService.getIntrants().subscribe(
        (prods) => {
          this.produits = [];
          prods.forEach((item: any)=>{
            console.log(item);
            item.categorie = this.categories.find(cat=>cat.id===item.categorieId).nom;
            this.produits.push(item);
          });
        }
      )
      this.sub2 = this.entreeService.getFournisseurs().subscribe(
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
      } else {
        this.title = "Ajout d'une entree";
        this.operation =  { numeroFacture:'', fournisseurId: null, montantTotal:null, montantPaye: null, autresFrais: null, reductions: null};
        this.onAddData();
      }
  
  }


  onAddData() {
   this.produitsArray.push({ produitId: null, prixUnitaire: null, quantite: null});
  }

  setQuantiteTotal() {
    this.operation.montantTotal = this.produitsArray.map(item=>item.prixUnitaire*item.quantite).reduce((b,c)=>b+c,0) + this.operation.autresFrais - this.operation.reductions;
  }

  onDelete(i: number) {
   this.produitsArray.splice(i,1);
   this.setQuantiteTotal();
  
  }

  produitController(i:number){
    let long = this.produitsArray.filter(item=> +item.produitId===+this.produitsArray[i].produitId).length;
    if(long>1){
      this.alert.toast({ type: 'danger', message: 'Vous avez dejà ajouter ce produit'});
      this.onDelete(i);
    } 
    this.setQuantiteTotal();
  }


  onSubmit() {
    if (!this.operation.fournisseurId) {
      this.alert.toast({ type: 'danger', message: 'Veuillez choisir fournisseur!'});
    } else if (this.produitsArray.filter(item=>item.produitId===null||item.quantite===null||item.quantite<=0||item.prixUnitaire===null).length>0) {
      this.alert.toast({ type: 'danger', message: 'Veuillez remplir correctement toutes les cases!'});
    } else if(this.operation.id) {
      this.entreeService.editEntree({entree: this.operation, produits: this.produitsArray});  
      this.onClose();
    } else{
      console.log({entree: this.operation, produits: this.produitsArray});
      this.entreeService.addEntree({entree: this.operation, produits: this.produitsArray});  
      this.onClose();
    } 

  }

  onSelectProduct(i, id, categorie, nom){
    console.log('id: '+ id)
    this.produitsArray[i].produitId = id;
    this.produitsArray[i].searching = false;
    this.produitsArray[i].nom = categorie+ ' ' + nom;
    this.produitController(i);
  }

  onClose() {
    this.modalController.dismiss();
  }
}

