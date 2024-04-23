import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConnexionComponent } from './components/connexion/connexion.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { TogglesComponent } from './components/toggles/toggles.component';


const routes: Routes = [
  { path:'', redirectTo:'dashboard',pathMatch:'full' },
  { path:'connexion', component:ConnexionComponent },
  { path:'dashboard', component:DashboardComponent },
  { path:'inscription', component:InscriptionComponent },
  { path:'settings', component:SettingsComponent },
  { path:'Toggle', component:TogglesComponent },
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
