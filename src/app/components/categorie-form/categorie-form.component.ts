import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PopoverController, NavParams } from '@ionic/angular';
import { ProduitService } from 'src/app/services/produit.service';
import { Categorie } from 'src/app/models/categorie.model';

@Component({
  selector: 'app-categorie-form',
  templateUrl: './categorie-form.component.html',
  styleUrls: ['./categorie-form.component.scss'],
})
export class CategorieFormComponent implements OnInit {

  form: FormGroup;
title: string = "Ajout de categorie"

constructor(
  private popoverController: PopoverController,
  private navParams: NavParams,
  private produitService: ProduitService
) { 

}

ngOnInit() {
  let id = this.navParams.get('id');
  let isIntrant= this.navParams.get('isIntrant');
  if(id) {
    let item: Categorie = this.produitService.getCategorie(id);
    this.title = item.nom;
    this.initForm(item);
  } 
  else this.initForm({id: null, nom: '', isIntrant: isIntrant, description: ''});
}

initForm(item){
  this.form = new FormGroup({
    id: new FormControl(item.id),
    isIntrant: new FormControl(item.isIntrant),
    nom: new FormControl(item.nom, Validators.required),
    description: new FormControl(item.description) 
  });
}


get nom() { return this.form.get('nom'); };
get description() { return this.form.get('description'); };

onSubmit(){
 this.form.value.nom = this.form.value.nom.toUpperCase();
  this.onClose(this.form.value);
}

onClose(data){
  this.popoverController.dismiss(data);
}

}
