import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { Chambre } from 'src/app/models/chambre.model';
import { PopoverController, ModalController } from '@ionic/angular';
import { ChambreService } from 'src/app/services/chambre.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { Type } from 'src/app/models/type.model';
import { TypeFormComponent } from 'src/app/components/forms/type-form/type-form.component';
import { TypeProfilComponent } from 'src/app/components/profil/type-profil/type-profil.component';
import { ChambreFormComponent } from 'src/app/components/forms/chambre-form/chambre-form.component';
import { ChambreProfilComponent } from 'src/app/components/profil/chambre-profil/chambre-profil.component';

@Component({
  selector: 'app-chambres',
  templateUrl: './chambres.page.html',
  styleUrls: ['./chambres.page.scss'],
})
export class ChambresPage implements OnInit {

  
  slidesOptions = {
    initialSlide: 0,
    spaceBetween: 4,
    slidesPerView: 4,
    breakpoints: {
      // when window width is >= 320px
      385: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1.5,
        spaceBetween: 1
      },
      // when window width is >= 640px
      765: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 3,
        spaceBetween: 10
      }
      // freeMode: true,
    }
  };
  typeSubscription: Subscription;
  types: Type[];
  typeTrashSubscription: Subscription;
  typesTrash: Type[] =[];

  chambreSubscription: Subscription;
  chambres: Chambre[];

  trash:boolean = false;

  constructor(
    private popoverController: PopoverController,
    private modalController: ModalController,
    private chambreService: ChambreService,
    private data: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.typeSubscription =  this.chambreService.getTypes().subscribe(
      (res: Type[]) => {
        this.types = [];
          res.forEach((item:any)=>{
            item.expand=false;
            this.types.push(item);
          });
      }
    );
    this.chambreSubscription =  this.chambreService.getChambres().subscribe(
      (res: Chambre[]) => {
        this.chambres = res;
      }
    );
    this.typeTrashSubscription =  this.chambreService.getTypesTrash().subscribe(
      (res: Type[]) => {
        this.typesTrash = res;
      }
    );
  }

  ngOnDestroy(){
    this.typeSubscription.unsubscribe();
    this.chambreSubscription.unsubscribe();
    this.typeTrashSubscription.unsubscribe();
  }

  async onAddType() {
    const popover = await this.popoverController.create({
      component: TypeFormComponent,
      translucent: false
    });
  
    popover.onDidDismiss().then(
      (res) => {
        console.log(res.data);
        if (res.data) this.chambreService.addType(res.data);
      }
    )
    await popover.present();
  }

  async onEditType(id) {
    const popover = await this.popoverController.create({
      component: TypeFormComponent,
      translucent: false,
      componentProps: {
        id: id
      }
    });
  
    popover.onDidDismiss().then(
      (res) => {
        if (res.data) this.chambreService.editType(res.data);
      }
    )
    await popover.present();
  }

  async onShowType(id) {
    const popover = await this.popoverController.create({
      component: TypeProfilComponent,
      translucent: false,
      componentProps: {
        id: id,
        trash: this.trash
      }
    });
    await popover.present();
  }

  
  onDeleteType(id: number){
    this.chambreService.deleteType(id);
  }

  onRestoreType(id: number){
    this.chambreService.restoreType(id);
  }

  async onAddChambre(id) {
    const popover = await this.popoverController.create({
      component: ChambreFormComponent,
      translucent: false,
      componentProps: {
        tId: id
      }
    });
  
    popover.onDidDismiss().then(
      (res) => {
        console.log(res.data);
        if (res.data) this.chambreService.addChambre(res.data);
      }
    )
    await popover.present();
  }

  async onEditChambre(id) {
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

  async onShowChambre(id) {
    const modal = await this.modalController.create({
      component: ChambreProfilComponent,
      componentProps: {
        id: id,
        trash: this.trash
      }
    });
    await modal.present();
  }
  
  onDeleteChambre(id: number){
    this.chambreService.deleteChambre(id);
  }

  onRestoreChambre(id: number){
    this.chambreService.restoreChambre(id);
  }

}