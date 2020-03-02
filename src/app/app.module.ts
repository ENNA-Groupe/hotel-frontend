import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, IonSlides } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FonctionFormComponent } from './components/forms/fonction-form/fonction-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FonctionProfilComponent } from './components/profil/fonction-profil/fonction-profil.component';
import { UserFormComponent } from './components/forms/user-form/user-form.component';
import { UserProfilComponent } from './components/profil/user-profil/user-profil.component';
import { TypeProfilComponent } from './components/profil/type-profil/type-profil.component';
import { TypeFormComponent } from './components/forms/type-form/type-form.component';
import { ChambreFormComponent } from './components/forms/chambre-form/chambre-form.component';
import { ChambreProfilComponent } from './components/profil/chambre-profil/chambre-profil.component';
import { CategorieFormComponent } from './components/forms/categorie-form/categorie-form.component';
import { CategorieProfilComponent } from './components/profil/categorie-profil/categorie-profil.component';
import { ProduitFormComponent } from './components/forms/produit-form/produit-form.component';
import { ProduitProfilComponent } from './components/profil/produit-profil/produit-profil.component';
import { IntrantProfilComponent } from './components/profil/intrant-profil/intrant-profil.component';
import { IntrantFormComponent } from './components/forms/intrant-form/intrant-form.component';
import { ProprieteFormComponent } from './components/forms/propriete-form/propriete-form.component';
import { EntreeFormComponent } from './components/forms/entree-form/entree-form.component';
import { EntreeProfilComponent } from './components/profil/entree-profil/entree-profil.component';
import { SortieFormComponent } from './components/forms/sortie-form/sortie-form.component';
import { ControlFormComponent } from './components/forms/control-form/control-form.component';
import { ControlProfilComponent } from './components/profil/control-profil/control-profil.component';
import { FournisseurFormComponent } from './components/forms/fournisseur-form/fournisseur-form.component';
import { PipesModule } from './pipes/pipes.module';
import { SortieProfilComponent } from './components/profil/sortie-profil/sortie-profil.component';
import { TableFormComponent } from './components/forms/table-form/table-form.component';
import { TableProfilComponent } from './components/profil/table-profil/table-profil.component';
import { ConsommationFormComponent } from './components/forms/consommation-form/consommation-form.component';
import { ConsommationProfilComponent } from './components/profil/consommation-profil/consommation-profil.component';
import { ClientFormComponent } from './components/forms/client-form/client-form.component';
import { ClientProfilComponent } from './components/profil/client-profil/client-profil.component';
import { LocationFormComponent } from './components/forms/location-form/location-form.component';
import { FournisseurProfilComponent } from './components/profil/fournisseur-profil/fournisseur-profil.component';
import { ChooseClientComponent } from './components/forms/choose-client/choose-client.component';

// const url = "http://ennahotel.eu-4.evennode.com/";
// const url = 'http://192.168.1.70:3000/';
const url = 'http://localhost:3000/';
// const url = 'http://192.168.173.54:3000/';
const config: SocketIoConfig = { url: url, options: {} };
const components: any[] = [ 
  FonctionFormComponent,
  FonctionProfilComponent,
  UserFormComponent,
  UserProfilComponent,
  TypeFormComponent,
  TypeProfilComponent,
  ChambreFormComponent,
  ChambreProfilComponent,
  CategorieFormComponent,
  CategorieProfilComponent,
  ProduitFormComponent,
  ProduitProfilComponent,
  IntrantFormComponent,
  IntrantProfilComponent,
  ProprieteFormComponent,
  EntreeFormComponent,
  EntreeProfilComponent,
  SortieFormComponent,
  SortieProfilComponent,
  ControlFormComponent,
  ControlProfilComponent,
  FournisseurFormComponent,
  FournisseurProfilComponent,
  TableFormComponent,
  TableProfilComponent,
  ConsommationFormComponent,
  ConsommationProfilComponent,
  ClientFormComponent,
  ClientProfilComponent,
  LocationFormComponent,
  ChooseClientComponent
]

@NgModule({
  declarations: [
    AppComponent,...components
  ],
  entryComponents: [
   ...components
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,PipesModule,
     SocketIoModule.forRoot(config),ReactiveFormsModule, FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
