import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PopoverController, NavParams } from '@ionic/angular';
import { ConsommationService } from 'src/app/services/consommation.service';
import { Table } from 'src/app/models/table.model';

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.scss'],
})
export class TableFormComponent implements OnInit {

form: FormGroup;
title: string = "Ajout de table"

constructor(
  private popoverController: PopoverController,
  private navParams: NavParams,
  private consommationService: ConsommationService
) { 

}

ngOnInit() {
  let id = this.navParams.get('id');
  if(id) {
    let item: Table = this.consommationService.getTable(id);
    this.title = 'Table ' + item.numero;
    this.initForm(item);
  } 
  else this.initForm({id: null, numero: '', description: ''});
}

initForm(item){
  this.form = new FormGroup({
    id: new FormControl(item.id),
    numero: new FormControl(item.numero, Validators.required),
    description: new FormControl(item.description) 
  });
}


get numero() { return this.form.get('numero'); };
get description() { return this.form.get('description'); };

onSubmit(){
 this.form.value.numero = this.form.value.numero.toUpperCase();
  this.onClose(this.form.value);
}

onClose(data){
  this.popoverController.dismiss(data);
}

}
