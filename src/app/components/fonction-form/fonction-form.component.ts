import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PopoverController, NavParams } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { Fonction } from 'src/app/models/fonction.model';

@Component({
  selector: 'app-fonction-form',
  templateUrl: './fonction-form.component.html',
  styleUrls: ['./fonction-form.component.scss'],
})
export class FonctionFormComponent implements OnInit {

form: FormGroup;
title: string = "Ajout de fonction"

constructor(
  private popoverController: PopoverController,
  private navParams: NavParams,
  private userService: UserService
) { 

}

ngOnInit() {
  let id = this.navParams.get('id');
  if(id) {
    let item: Fonction = this.userService.getFonction(id);
    this.title = item.nom;
    this.initForm(item);
  } 
  else this.initForm({id: null, nom: '', description: ''});
}

initForm(item){
  this.form = new FormGroup({
    id: new FormControl(item.id),
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
