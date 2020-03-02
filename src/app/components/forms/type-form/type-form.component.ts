import { Component, OnInit } from '@angular/core';
import { Type } from 'src/app/models/type.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PopoverController, NavParams } from '@ionic/angular';
import { ChambreService } from 'src/app/services/chambre.service';

@Component({
  selector: 'app-type-form',
  templateUrl: './type-form.component.html',
  styleUrls: ['./type-form.component.scss'],
})
export class TypeFormComponent implements OnInit {

  note: number;
  form: FormGroup;
title: string = "Ajout de type"

constructor(
  private popoverController: PopoverController,
  private navParams: NavParams,
  private chambreService: ChambreService
) { 

}

ngOnInit() {
  let id = this.navParams.get('id');
  if(id) {
    let item: Type = this.chambreService.getType(id);
    this.title = item.nom;
    this.note=item.note;
    this.initForm(item);
  } 
  else {
    this.note = 0;
    this.initForm({id: null, nom: '', description: ''});
  }
}

initForm(item){
  this.form = new FormGroup({
    id: new FormControl(item.id),
    nom: new FormControl(item.nom, Validators.required),
    description: new FormControl(item.description),
  });
}

get nom() { return this.form.get('nom'); };
get description() { return this.form.get('description'); };

onSetNote(i){
  if (this.note===i) this.note=0;
  else this.note=i;
}

onSubmit(){
 this.form.value.nom = this.form.value.nom.toUpperCase();
 this.form.value.note = this.note;
  this.onClose(this.form.value);
}

onClose(data){
  this.popoverController.dismiss(data);
}

}
