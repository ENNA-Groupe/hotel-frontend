import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PopoverController, NavParams } from '@ionic/angular';
import { ParamsService } from 'src/app/services/params.service';
import { Control } from 'src/app/models/control.model';

@Component({
  selector: 'app-control-form',
  templateUrl: './control-form.component.html',
  styleUrls: ['./control-form.component.scss'],
})
export class ControlFormComponent implements OnInit {

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
      let item: Control = this.paramsService.getControl(id);
      this.title = 'Control ' + item.nom;
      this.initForm(item);
    } 
    else this.initForm({id: null, nom: '', operation:'', description: ''});
  }
  
  initForm(item){
    this.form = new FormGroup({
      id: new FormControl(item.id),
      nom: new FormControl(item.nom, Validators.required),
      operation: new FormControl(item.operation, Validators.required),
      description: new FormControl(item.description) 
    });
  }
  
  
  get nom() { return this.form.get('nom'); };
  get operation() { return this.form.get('operation'); };
  get description() { return this.form.get('description'); };
  
  onSubmit(){
   this.form.value.nom = this.form.value.nom.toLowerCase();
   this.form.value.operation = this.form.value.operation.toLowerCase();
    this.onClose(this.form.value);
  }
  
  onClose(data){
    this.popoverController.dismiss(data);
  }
  
  }
  