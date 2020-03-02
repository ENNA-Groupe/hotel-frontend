import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie.model';
import { NavParams, PopoverController } from '@ionic/angular';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-categorie-profil',
  templateUrl: './categorie-profil.component.html',
  styleUrls: ['./categorie-profil.component.scss'],
})
export class CategorieProfilComponent implements OnInit {

  title: string = "Ajout de categorie"
  item: Categorie;
  

  constructor(
    private popoverController: PopoverController,
    private navParams: NavParams,
    private produitService: ProduitService
  ) {

  }

  ngOnInit() {
    let id = this.navParams.get('id');
    if (id) {
     this.item = this.produitService.getCategorie(id);
      this.title = this.item.nom;
    }
  }

  onClose(){
    this.popoverController.dismiss();
  }
}
