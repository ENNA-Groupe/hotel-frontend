import { Component, OnInit } from '@angular/core';
import { Propriete } from 'src/app/models/propriete.model';
import { Subscription } from 'rxjs';
import { PopoverController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ParamsService } from 'src/app/services/params.service';
import { Router } from '@angular/router';
import { ProprieteFormComponent } from 'src/app/components/forms/propriete-form/propriete-form.component';
import { ProprieteProfilComponent } from 'src/app/components/profil/propriete-profil/propriete-profil.component';

@Component({
  selector: 'app-propriete',
  templateUrl: './propriete.page.html',
  styleUrls: ['./propriete.page.scss'],
})
export class ProprietePage implements OnInit {

  proprieteSubscription: Subscription;
  proprietes: Propriete[];
  proprieteTrashSubscription: Subscription;
  proprietesTrash: Propriete[];
  trash:boolean = false;

  constructor(
    private popoverController: PopoverController,
    private data: DataService,
    private paramsService: ParamsService,
  ) { }

  ngOnInit() {
   this.proprieteSubscription =  this.paramsService.getProprietes().subscribe(
      (res: Propriete[]) => {
       this.proprietes = res;
      }
    );
    
   this.proprieteTrashSubscription =  this.paramsService.getProprietesTrash().subscribe(
      (res: Propriete[]) => {
       this.proprietesTrash = res;
      }
    );
  }

  ngOnDestroy(){
   this.proprieteSubscription.unsubscribe();
   this.proprieteSubscription.unsubscribe();
   this.proprieteTrashSubscription.unsubscribe();
  }

  async onAdd() {
    const popover = await this.popoverController.create({
      component: ProprieteFormComponent,
      translucent: false
    });
  
    popover.onDidDismiss().then(
      (res) => {
        console.log(res.data);
        if (res.data) this.paramsService.addPropriete(res.data);
      }
    )
    await popover.present();
  }

  async onEdit(id) {
    const popover = await this.popoverController.create({
      component: ProprieteFormComponent,
      translucent: false,
      componentProps: {
        id: id
      }
    });
  
    popover.onDidDismiss().then(
      (res) => {
        if (res.data) this.paramsService.editPropriete(res.data);
      }
    )
    await popover.present();
  }

  async onShow(id) {
    const popover = await this.popoverController.create({
      component: ProprieteProfilComponent,
      translucent: false,
      componentProps: {
        id: id,
        trash: this.trash
      }
    });
    await popover.present();
  }
  
  onDelete(id: number){
    this.paramsService.deletePropriete(id);
  }

  onRestore(id: number){
    this.paramsService.restorePropriete(id);
  }

}