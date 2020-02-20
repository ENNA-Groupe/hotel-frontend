import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Categorie } from 'src/app/models/categorie.model';
import { Produit } from 'src/app/models/produit.model';
import { PopoverController } from '@ionic/angular';
import { ProduitService } from 'src/app/services/produit.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { CategorieFormComponent } from 'src/app/components/categorie-form/categorie-form.component';
import { CategorieProfilComponent } from 'src/app/components/categorie-profil/categorie-profil.component';
import { ProduitFormComponent } from 'src/app/components/produit-form/produit-form.component';
import { ProduitProfilComponent } from 'src/app/components/produit-profil/produit-profil.component';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
})
export class ProduitsPage implements OnInit {

  categorieSubscription: Subscription;
  categories: Categorie[];
  categorieTrashSubscription: Subscription;
  categoriesTrash: Categorie[];

  produitSubscription: Subscription;
  produits: Produit[];

  trash:boolean = false;

  constructor(
    private popoverController: PopoverController,
    private produitService: ProduitService,
    private data: DataService,
    private router: Router
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
        this.produits = res;
      }
    );
    this.categorieTrashSubscription =  this.produitService.getCategoriesTrash().subscribe(
      (res: Categorie[]) => {
        this.categoriesTrash = res;
      }
    );
  }

  ngOnDestroy(){
    this.categorieSubscription.unsubscribe();
    this.produitSubscription.unsubscribe();
    this.categorieTrashSubscription.unsubscribe();
  }

  async onAddCategorie() {
    const popover = await this.popoverController.create({
      component: CategorieFormComponent,
      translucent: false,
      componentProps:{
        isIntrant: false
      }
    });
  
    popover.onDidDismiss().then(
      (res) => {
        console.log(res.data);
        if (res.data) this.produitService.addCategorie(res.data);
      }
    )
    await popover.present();
  }

  async onEditCategorie(id) {
    const popover = await this.popoverController.create({
      component: CategorieFormComponent,
      translucent: false,
      componentProps: {
        id: id
      }
    });
  
    popover.onDidDismiss().then(
      (res) => {
        if (res.data) this.produitService.editCategorie(res.data);
      }
    )
    await popover.present();
  }

  async onShowCategorie(id) {
    const popover = await this.popoverController.create({
      component: CategorieProfilComponent,
      translucent: false,
      componentProps: {
        id: id,
        trash: this.trash
      }
    });
    await popover.present();
  }

  onDeleteCategorie(id: number){
    this.produitService.deleteCategorie(id);
  }

  onRestoreCategorie(id: number){
    this.produitService.restoreCategorie(id);
  }

  
  async onAddProduit(id) {
    const popover = await this.popoverController.create({
      component: ProduitFormComponent,
      translucent: false
    });
  
    popover.onDidDismiss().then(
      (res) => {
        console.log(res.data);
        if (res.data) this.produitService.addProduit(res.data);
      }
    )
    await popover.present();
  }

  async onEditProduit(id) {
    const popover = await this.popoverController.create({
      component: ProduitFormComponent,
      translucent: false,
      componentProps: {
        id: id
      }
    });
  
    popover.onDidDismiss().then(
      (res) => {
        if (res.data) this.produitService.editProduit(res.data);
      }
    )
    await popover.present();
  }

  async onShowProduit(id) {
    const popover = await this.popoverController.create({
      component: ProduitProfilComponent,
      translucent: false,
      componentProps: {
        id: id,
        trash: this.trash
      }
    });
    await popover.present();
  }
  
  onDeleteProduit(id: number){
   if(window.confirm('Voulez vous vraiment supprimer ce produit?')) this.produitService.deleteProduit(id);
  }

  onRestoreProduit(id: number){
    this.produitService.restoreProduit(id);
  }

}