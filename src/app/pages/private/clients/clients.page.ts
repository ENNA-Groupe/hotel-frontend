import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Client } from 'src/app/models/client.model';
import { PopoverController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { LocationService } from 'src/app/services/location.service';
import { Router } from '@angular/router';
import { ClientFormComponent } from 'src/app/components/forms/client-form/client-form.component';
import { ClientProfilComponent } from 'src/app/components/profil/client-profil/client-profil.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {

  clientSubscription: Subscription;
  clients: Client[];
  clientTrashSubscription: Subscription;
  clientsTrash: Client[];
  trash:boolean = false;

  constructor(
    private popoverController: PopoverController,
    private data: DataService,
    private locationService: LocationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.clientSubscription =  this.locationService.getClients().subscribe(
      (res: Client[]) => {
        this.clients = res;
      }
    );
    
    this.clientTrashSubscription =  this.locationService.getClientsTrash().subscribe(
      (res: Client[]) => {
        this.clientsTrash = res;
      }
    );
  }

  ngOnDestroy(){
    this.clientSubscription.unsubscribe();
    this.clientSubscription.unsubscribe();
    this.clientTrashSubscription.unsubscribe();
  }

  async onAdd() {
    const popover = await this.popoverController.create({
      component: ClientFormComponent,
      translucent: false
    });
  
    popover.onDidDismiss().then(
      (res) => {
        console.log(res.data);
        if (res.data) this.locationService.addClient(res.data);
      }
    )
    await popover.present();
  }

  async onEdit(id) {
    const popover = await this.popoverController.create({
      component: ClientFormComponent,
      translucent: false,
      componentProps: {
        id: id
      }
    });
  
    popover.onDidDismiss().then(
      (res) => {
        if (res.data) this.locationService.editClient(res.data);
      }
    )
    await popover.present();
  }

  async onShow(id) {
    const popover = await this.popoverController.create({
      component: ClientProfilComponent,
      translucent: false,
      componentProps: {
        id: id,
        trash: this.trash
      }
    });
    await popover.present();
  }
  
  onDelete(id: number){
    this.locationService.deleteClient(id);
  }

  onRestore(id: number){
    this.locationService.restoreClient(id);
  }

}