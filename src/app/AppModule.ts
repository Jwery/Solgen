import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ChartModule } from 'primeng/chart';
import { GraphicComponent } from './components/graphic/graphic.component';
import { DragdropComponent } from './components/dragdrop/dragdrop.component';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { TableComponent } from './components/table/table.component';
import { HttpClientModule,HttpClient, } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { UserviewComponent } from './pages/userview/userview.component';
import { CardModule } from 'primeng/card'
import { CookieService } from 'ngx-cookie-service';
import { ModifyPasswordComponent } from './pages/settings/modifyPassword/modifyPassword.component';
import { siteFormComponent } from './components/SiteForm/siteForm.component';


import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Page404Component } from './pages/page404/page404.component';



import { InfochantierComponent } from './components/infochantier/infochantier.component';
import { DatachantierComponent } from './components/datachantier/datachantier.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    DashboardComponent,
    SettingsComponent,
    HeaderComponent,
    FooterComponent,
    GraphicComponent,
    DragdropComponent,
    TableComponent,
    InscriptionComponent,
    UserviewComponent,
    ModifyPasswordComponent,
    UserviewComponent,
    InfochantierComponent,
    DatachantierComponent,
    Page404Component,
    siteFormComponent
  ],
  imports: [

    AppRoutingModule,
    AvatarModule,
    AvatarGroupModule,
    IconFieldModule,
    InputIconModule,
    ChartModule,
    FileUploadModule,
    ToastModule,
    TableModule,
    HttpClientModule,
    AutoCompleteModule,
    DropdownModule,
    BrowserModule,
    InputNumberModule,
    DropdownModule,
    FloatLabelModule,
    DropdownModule,
    ReactiveFormsModule,
    CardModule,
    InputIconModule,
    IconFieldModule,
    InputTextModule,
    CardModule,
    AutoCompleteModule,
    FormsModule,
    InputTextModule,
    CalendarModule,
    FloatLabelModule,
    BrowserAnimationsModule
 
    
  ],

  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
