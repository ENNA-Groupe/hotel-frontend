import { Component, OnInit} from '@angular/core';
import { Chambre } from 'src/app/models/chambre.model';
import { Subscription } from 'rxjs';
import { PopoverController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { ChambreService } from 'src/app/services/chambre.service';
import { TypeFormComponent } from 'src/app/components/type-form/type-form.component';
import { TypeProfilComponent } from 'src/app/components/type-profil/type-profil.component';
import { Type } from 'src/app/models/type.model';


@Component({
  selector: 'app-types',
  templateUrl: './types.page.html',
  styleUrls: ['./types.page.scss'],
})
export class TypesPage implements OnInit {

  typeSubscription: Subscription;
  types: Type[];
  typeTrashSubscription: Subscription;
  typesTrash: Type[];

  chambreSubscription: Subscription;
  chambres: Chambre[];

  trash:boolean = false;

  constructor(
    private popoverController: PopoverController,
    private chambreService: ChambreService,
    private data: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.typeSubscription =  this.chambreService.getTypes().subscribe(
      (res: Type[]) => {
        this.types = res;
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

  async onAdd() {
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

  async onEdit(id) {
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

  async onShow(id) {
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

  onGoToItems(id){
    this.router.navigate(['private/chambres-tab/chambres', id]);
  }
  
  onDelete(id: number){
    this.chambreService.deleteType(id);
  }

  onRestore(id: number){
    this.chambreService.restoreType(id);
  }

}