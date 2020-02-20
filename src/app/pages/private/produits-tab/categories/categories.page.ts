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

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
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
        this.categories = res;
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

  async onAdd() {
    const popover = await this.popoverController.create({
      component: CategorieFormComponent,
      translucent: false
    });
  
    popover.onDidDismiss().then(
      (res) => {
        console.log(res.data);
        if (res.data) this.produitService.addCategorie(res.data);
      }
    )
    await popover.present();
  }

  async onEdit(id) {
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

  async onShow(id) {
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

  onGoToItems(id){
    this.router.navigate(['private/produits-tab/produits', id]);
  }
  
  onDelete(id: number){
    this.produitService.deleteCategorie(id);
  }

  onRestore(id: number){
    this.produitService.restoreCategorie(id);
  }


}