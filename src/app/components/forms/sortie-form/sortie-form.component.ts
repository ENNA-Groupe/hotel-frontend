import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Intrant } from 'src/app/models/intrant.model';
import { Categorie } from 'src/app/models/categorie.model';
import { User } from 'src/app/models/user.model';
import { Subscription } from 'rxjs';
import { Sortie } from 'src/app/models/sortie.model';
import { ProduitService } from 'src/app/services/produit.service';
import { SortieService } from 'src/app/services/sortie.service';
import { AlertService } from 'src/app/services/alert.service';
import { ModalController, NavParams } from '@ionic/angular';
import { Fonction } from 'src/app/models/fonction.model';

@Component({
  selector: 'app-sortie-form',
  templateUrl: './sortie-form.component.html',
  styleUrls: ['./sortie-form.component.scss'],
})
export class SortieFormComponent implements OnInit {

  produits: Intrant[];
  categories: Categorie[];
  fonctions: Fonction[];
  users: User[];
  title = "Ajout d'une sortie";
  sub1: Subscription;
  sub2: Subscription;
  sub3: Subscription;
  sub4: Subscription;
  produitsArray : any[] =[];
  operation: any;
 item: Sortie;
  constructor(
    public produitService: ProduitService,
    public sortieService: SortieService,
    private userService: UserService,
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
     this.sub2 = this.produitService.getIntrants().subscribe(
        (prods) => {
          this.produits = [];
          prods.forEach((item: any)=>{
            console.log(item);
            item.categorie = this.categories.find(cat=>cat.id===item.categorieId).nom;
            this.produits.push(item);
          });
        }
      )

      this.sub3 = this.userService.getFonctions().subscribe(
        (res) => {
          this.fonctions = res;
        }
      );

      this.sub4 = this.userService.getUsers().subscribe(
        (res) => {
          this.users = res;
        }
      );

      if (id) {
        this.item = this.sortieService.getSortie(id);
        this.title = "Modification de la sortie"
        this.operation = {id:this.item.id,  userId: this.item.userId};
        this.sortieService.getSortieProduits(this.item.id).then(
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
        this.title = "Ajout d'une sortie";
        this.operation =  { numeroFacture:'', userId: null};
        this.onAddData();
      }
  
  }


  onAddData() {
   this.produitsArray.push({ produitId: null, quantite: null});
  }

  // setQuantiteTotal() {
  //   this.operation.montantTotal = this.produitsArray.map(item=>item.prixUnitaire*item.quantite).reduce((b,c)=>b+c,0) + this.operation.autresFrais - this.operation.reductions;
  // }

  onDelete(i: number) {
   this.produitsArray.splice(i,1);
  //  this.setQuantiteTotal();
  
  }

  produitController(i:number){
    let long = this.produitsArray.filter(item=> +item.produitId===+this.produitsArray[i].produitId).length;
    if(long>1){
      this.alert.toast({ type: 'danger', message: 'Vous avez dejà ajouter ce produit'});
      this.onDelete(i);
    } 
    // this.setQuantiteTotal();
  }


  onSubmit() {
    if (!this.operation.userId) {
      this.alert.toast({ type: 'danger', message: 'Veuillez choisir un utilisateur!'});
    } else if (this.produitsArray.filter(item=>item.produitId===null||item.quantite===null||item.quantite<=0).length>0) {
      this.alert.toast({ type: 'danger', message: 'Veuillez remplir correctement toutes les cases!'});
    } else if(this.operation.id) {
      this.sortieService.editSortie({sortie: this.operation, produits: this.produitsArray});  
      this.onClose();
    } else{
      console.log({sortie: this.operation, produits: this.produitsArray});
      this.sortieService.addSortie({sortie: this.operation, produits: this.produitsArray});  
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

