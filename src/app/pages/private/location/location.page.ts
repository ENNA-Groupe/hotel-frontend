import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { Location } from 'src/app/models/location.model';
import { ChambreService } from 'src/app/services/chambre.service';
import { Subscription } from 'rxjs';
import { PopoverController } from '@ionic/angular';
import { LocationFormComponent } from 'src/app/components/forms/location-form/location-form.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  locations: Location[]=[];
  subs1: Subscription;

  constructor(
    private locationService: LocationService,
    private chambreService: ChambreService,
    private popoverController: PopoverController
  ) { }

  ngOnInit() {
    this.locationService.getLocations().subscribe(
      (res) => {
        res.forEach(
          (item:any) => {
            // item.client = this.locationService.getClient(item.clientId);
            // item.chambre = this.chambreService.getChambre(item.chambreId);
            item.createdAt = new Date(item.createdAt);
            this.locations.push(item);
            // this.date = new Date();
          }
        );
      }
    );
  }

  onLoadData(e){
    this.locationService.getLocations();
  }

  getClient(id){
    return this.locationService.getClient(id);
  }

  getChambre(id){
    return this.chambreService.getChambre(id);
  }

  // getNbreJours(x: string){
  //   let date = new Date();
  //   let createdAt =  new Date(createdAt);
  //   let x = date - createdAt;
  // }

  async onAdd() {
    const popover = await this.popoverController.create({
      component: LocationFormComponent,
      translucent: false,
      cssClass: "location"
    });

    popover.onDidDismiss().then(
      (res) => {
        if (res.data) this.locationService.addLocation(res.data);
      }
    );
  
    await popover.present();
  }
}
