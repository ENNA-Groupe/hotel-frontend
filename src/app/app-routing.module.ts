import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'public', pathMatch:'full' },
  { path: 'private', loadChildren: './pages/private/private.module#PrivatePageModule' },
  { path: 'public', loadChildren: './pages/public/public.module#PublicPageModule' }, 
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
