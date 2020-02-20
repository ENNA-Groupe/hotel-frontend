import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, IonSlides } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FonctionFormComponent } from './components/fonction-form/fonction-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FonctionProfilComponent } from './components/fonction-profil/fonction-profil.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserProfilComponent } from './components/user-profil/user-profil.component';
import { TypeProfilComponent } from './components/type-profil/type-profil.component';
import { TypeFormComponent } from './components/type-form/type-form.component';
import { ChambreFormComponent } from './components/chambre-form/chambre-form.component';
import { ChambreProfilComponent } from './components/chambre-profil/chambre-profil.component';
import { CategorieFormComponent } from './components/categorie-form/categorie-form.component';
import { CategorieProfilComponent } from './components/categorie-profil/categorie-profil.component';
import { ProduitFormComponent } from './components/produit-form/produit-form.component';
import { ProduitProfilComponent } from './components/produit-profil/produit-profil.component';
import { IntrantProfilComponent } from './components/intrant-profil/intrant-profil.component';
import { IntrantFormComponent } from './components/intrant-form/intrant-form.component';
import { ProprieteFormComponent } from './components/propriete-form/propriete-form.component';
import { EntreeFormComponent } from './components/entree-form/entree-form.component';
import { EntreeProfilComponent } from './components/entree-profil/entree-profil.component';
import { SortieFormComponent } from './components/sortie-form/sortie-form.component';
import { ControlFormComponent } from './components/control-form/control-form.component';
import { ControlProfilComponent } from './components/control-profil/control-profil.component';
import { FournisseurProfilComponent } from './components/fournisseur-profil/fournisseur-profil.component';
import { FournisseurFormComponent } from './components/fournisseur-form/fournisseur-form.component';
import { PipesModule } from './pipes/pipes.module';
import { SortieProfilComponent } from './components/sortie-profil/sortie-profil.component';
import { TableFormComponent } from './components/table-form/table-form.component';
import { TableProfilComponent } from './components/table-profil/table-profil.component';
import { ConsommationFormComponent } from './components/consommation-form/consommation-form.component';
import { ConsommationProfilComponent } from './components/consommation-profil/consommation-profil.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientProfilComponent } from './components/client-profil/client-profil.component';

// http://ennahotel.eu-4.evennode.com/
// 'http://192.168.1.70:3000/'
const config: SocketIoConfig = { url: 'http://ennahotel.eu-4.evennode.com/', options: {} };
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
  ClientProfilComponent
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
