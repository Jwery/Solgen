import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConnexionComponent } from './pages/connexion/connexion.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { UserviewComponent } from './pages/userview/userview.component';
import { userResolver } from './resolver/userResolver';
import {ModifyPasswordComponent} from './pages/settings/modifyPassword/modifyPassword.component'
import { Page404Component } from './pages/page404/page404.component';
import { siteResolver } from './resolver/siteResolver';
import { DataviewComponent } from './dataview/dataview.component';

const routes: Routes = [
  { path:'', redirectTo:'dashboard',pathMatch:'full' },
  { path:'connexion', component:ConnexionComponent },
  { path:'dashboard', component:DashboardComponent,resolve:{site:siteResolver} },
  { path:'settings', component:SettingsComponent,resolve:{user:userResolver}},
  { path:'inscription', component:InscriptionComponent },
  { path:'userview', component:UserviewComponent},
  { path:'dataview', component:DataviewComponent},
  { path:'modifyPassword', component:ModifyPasswordComponent,resolve:{user:userResolver} },
  {path:'**',component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
