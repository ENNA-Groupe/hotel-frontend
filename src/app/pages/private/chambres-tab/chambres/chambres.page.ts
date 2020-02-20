import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Chambre } from 'src/app/models/chambre.model';
import { PopoverController } from '@ionic/angular';
import { ChambreService } from 'src/app/services/chambre.service';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { ChambreFormComponent } from 'src/app/components/chambre-form/chambre-form.component';
import { ChambreProfilComponent } from 'src/app/components/chambre-profil/chambre-profil.component';

@Component({
  selector: 'app-chambres',
  templateUrl: './chambres.page.html',
  styleUrls: ['./chambres.page.scss'],
})
export class ChambresPage implements OnInit {

  typeId: string;
  chambreSubscription: Subscription;
  chambres: Chambre[];
  chambreTrashSubscription: Subscription;
  chambresTrash: Chambre[];
  trash:boolean = false;

  constructor(
    private popoverController: PopoverController,
    private chambreService: ChambreService,
    private data: DataService,
    private route: ActivatedRoute
  ) {
    this.typeId = this.route.snapshot.paramMap.get('typeId');
   }

  ngOnInit() {
    this.chambreSubscription =  this.chambreService.getChambres().subscribe(
      (res: Chambre[]) => {
        this.chambres = res;
      }
    );
    this.chambreTrashSubscription =  this.chambreService.getChambresTrash().subscribe(
      (res: Chambre[]) => {
        this.chambresTrash = res;
      }
    );
  }

  ngOnDestroy(){
    this.chambreSubscription.unsubscribe();
    this.chambreTrashSubscription.unsubscribe();
  }

  async onAdd() {
    const popover = await this.popoverController.create({
      component: ChambreFormComponent,
      translucent: false
    });
  
    popover.onDidDismiss().then(
      (res) => {
        console.log(res.data);
        if (res.data) this.chambreService.addChambre(res.data);
      }
    )
    await popover.present();
  }

  async onEdit(id) {
    const popover = await this.popoverController.create({
      component: ChambreFormComponent,
      translucent: false,
      componentProps: {
        id: id
      }
    });
  
    popover.onDidDismiss().then(
      (res) => {
        if (res.data) this.chambreService.editChambre(res.data);
      }
    )
    await popover.present();
  }

  async onShow(id) {
    const popover = await this.popoverController.create({
      component: ChambreProfilComponent,
      translucent: false,
      componentProps: {
        id: id,
        trash: this.trash
      }
    });
    await popover.present();
  }
  
  onDelete(id: number){
    this.chambreService.deleteChambre(id);
  }

  onRestore(id: number){
    this.chambreService.restoreChambre(id);
  }

}