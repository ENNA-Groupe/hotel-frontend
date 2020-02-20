import { Component, OnInit } from '@angular/core';
import { Fournisseur } from 'src/app/models/fournisseur.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PopoverController, NavParams } from '@ionic/angular';
import { EntreeService } from 'src/app/services/entree.service';

@Component({
  selector: 'app-fournisseur-form',
  templateUrl: './fournisseur-form.component.html',
  styleUrls: ['./fournisseur-form.component.scss'],
})
export class FournisseurFormComponent implements OnInit {

  form: FormGroup;
  title: string = "Ajout de fournisseur"
  
  constructor(
    private popoverController: PopoverController,
    private navParams: NavParams,
    private entreeService: EntreeService
  ) { 
  
  }
  
  ngOnInit() {
    let id = this.navParams.get('id');
    let isIntrant= this.navParams.get('isIntrant');
    if(id) {
      let item: Fournisseur = this.entreeService.getFournisseur(id);
      this.title = item.nom;
      this.initForm(item);
    } 
    else this.initForm({id: null, nom: '', contact:''});
  }
  
  initForm(item){
    this.form = new FormGroup({
      id: new FormControl(item.id),
      nom: new FormControl(item.nom, Validators.required),
      contact: new FormControl(item.contact),
    });
  }
  
  
  get nom() { return this.form.get('nom'); };
  
  onSubmit(){
   this.form.value.nom = this.form.value.nom.toUpperCase();
    this.onClose(this.form.value);
  }
  
  onClose(data){
    this.popoverController.dismiss(data);
  }
  
  }
  