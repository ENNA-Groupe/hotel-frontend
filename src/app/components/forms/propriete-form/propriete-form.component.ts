import { Component, OnInit } from '@angular/core';
import { Propriete } from 'src/app/models/propriete.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PopoverController, NavParams } from '@ionic/angular';
import { ParamsService } from 'src/app/services/params.service';

@Component({
  selector: 'app-propriete-form',
  templateUrl: './propriete-form.component.html',
  styleUrls: ['./propriete-form.component.scss'],
})
export class ProprieteFormComponent implements OnInit {

form: FormGroup;
title: string = "Ajout de propriete"

constructor(
  private popoverController: PopoverController,
  private navParams: NavParams,
  private paramsService: ParamsService
) { 

}

ngOnInit() {
  let id = this.navParams.get('id');
  if(id) {
    let item: Propriete = this.paramsService.getPropriete(id);
    this.title = 'Propriete ' + item.nom;
    this.initForm(item);
  } 
  else this.initForm({id: null, nom: '', model:'', coutAdditionnel: 0, description: ''});
}

initForm(item){
  this.form = new FormGroup({
    id: new FormControl(item.id),
    nom: new FormControl(item.nom, Validators.required),
    model: new FormControl(item.model, Validators.required),
    coutAdditionnel: new FormControl(item.coutAdditionnel, Validators.required),
    description: new FormControl(item.description) 
  });
}


get nom() { return this.form.get('nom'); };
get model() { return this.form.get('model'); };
get coutAdditionnel() { return this.form.get('coutAdditionnel'); };
get description() { return this.form.get('description'); };

onSubmit(){
 this.form.value.nom = this.form.value.nom.toUpperCase();
  this.onClose(this.form.value);
}

onClose(data){
  this.popoverController.dismiss(data);
}

}
