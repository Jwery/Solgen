import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
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
import { GraphicComponent } from './components/graphic/graphic.component';
import { DragdropComponent } from './components/dragdrop/dragdrop.component';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { TableComponent } from './components/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ChantierComponent } from './components/form/chantier/chantier.component';
import { ResponsableComponent } from './components/form/responsable/responsable.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { NappeComponent } from './components/form/nappe/nappe.component';
import { IntervalleComponent } from './components/intervalle/intervalle.component';
import { DateComponent } from './components/date/date.component';
import { CalendarModule } from 'primeng/calendar';








@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    FormComponent,
    DashboardComponent,
    InscriptionComponent,
    SettingsComponent,
    HeaderComponent,
    FooterComponent,
    GraphicComponent,
    DragdropComponent,
    TableComponent,
    ChantierComponent,
    ResponsableComponent,
    NappeComponent,
    IntervalleComponent,
    DateComponent
    
  ],
  imports: [
    BrowserModule,
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
    FormsModule,
    InputNumberModule,
    CalendarModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
