import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { GraphicComponent } from './components/graphic/graphic.component';
import { FormComponent } from './components/form/form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ChartModule } from 'primeng/chart';



@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    GraphicComponent,
    FormComponent,
    DashboardComponent,
    InscriptionComponent,
    SettingsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AvatarModule,
    AvatarGroupModule,
    IconFieldModule,
    InputIconModule,
    ChartModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
