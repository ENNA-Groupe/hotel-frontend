import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Categorie } from 'src/app/models/categorie.model';
import { Subscription } from 'rxjs';
import { IonSlides, PopoverController, NavParams } from '@ionic/angular';
import { ProduitService } from 'src/app/services/produit.service';
import { Intrant } from 'src/app/models/intrant.model';

@Component({
  selector: 'app-intrant-form',
  templateUrl: './intrant-form.component.html',
  styleUrls: ['./intrant-form.component.scss'],
})
export class IntrantFormComponent implements OnInit {

  form: FormGroup;
  title: string = "Ajout de produit";
  photo: string;
  categories: Categorie[] = [];
  foncSub: Subscription;

  constructor(
    private popoverController: PopoverController,
    private navParams: NavParams,
    private produitService: ProduitService
  ) {

  }

  ngOnInit() {
    this.foncSub = this.produitService.getCategories().subscribe(
      foncs => this.categories = foncs
    );
    let id = this.navParams.get('id');
    if (id) {
      let item: Intrant = this.produitService.getIntrant(id);
      this.title = item.nom;
      this.initForm(item);
    }
    else {
      this.initForm({ id: null, categorieId: null, nom: '', description: '', quantiteAlerte: '', uniteMesure: ''});
    }
  }

  ngOnDestroy() {
    this.foncSub.unsubscribe();
  }

  initForm(item) {
    this.form = new FormGroup({
      id: new FormControl(item.id),
      categorieId: new FormControl(item.categorieId, Validators.required),
      nom: new FormControl(item.nom, Validators.required),
      uniteMesure: new FormControl(item.uniteMesure, Validators.required),
      description: new FormControl(item.description),
      quantiteAlerte: new FormControl(item.quantiteAlerte, Validators.required),
    });
  }

  get categorieId() { return this.form.get('categorieId'); };
  get nom() { return this.form.get('nom'); };
  get description() { return this.form.get('description'); };
  get quantiteAlerte() { return this.form.get('quantiteAlerte'); };
  get uniteMesure() { return this.form.get('uniteMesure'); };

  onSubmit() {
    this.form.value.nom = this.form.value.nom.toUpperCase();
    this.onClose(this.form.value);
  }

  onClose(data) {
    this.popoverController.dismiss(data);
  }
}
