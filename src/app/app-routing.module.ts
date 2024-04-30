import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConnexionComponent } from './pages/connexion/connexion.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { UserviewComponent } from './pages/userview/userview.component';


const routes: Routes = [
  { path:'', redirectTo:'dashboard',pathMatch:'full' },
  { path:'connexion', component:ConnexionComponent },
  { path:'dashboard', component:DashboardComponent },
  { path:'settings', component:SettingsComponent },
  { path:'inscription', component:InscriptionComponent },
  { path:'userview', component:UserviewComponent}

  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
