import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { InfochantierService } from '../../services/infochantier.service';
import { SiteService } from '../../services/site.service';
import { CityService } from '../../services/city.service';
import { EssayService } from '../../services/essay.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-infochantier',
  templateUrl: './infochantier.component.html',
  styleUrls: ['./infochantier.component.scss'],
  providers: [MessageService],
})
export class InfochantierComponent implements OnInit {
  @Input() 
  API: any;
  CityList: string[] = [];
  SelectedCity: string | null = null;
  nom: string | null = null;
  
  value: number | null = null;
  value1: number = 20;
  value2: number | null = null;
  value3: number = 25;
  valueDefault1: number = 0.25;
  valueDefault2: number = 0.20;
  date: Date = new Date(); // Set to current date
  
  constructor(
    private http: HttpClient,
    private siteService: SiteService,
    private cityService: CityService,
    private infoChantierService: InfochantierService,
    private route: ActivatedRoute,
    private essayService: EssayService,
    private messageService: MessageService, 
  ) { }

  ngOnInit() {
    this.getList();
  }
  
  async onClick() {
    var Essay = {
      id: 0,
      nappe: this.value ?? 0, // Convert to number
      interv: this.value2 ?? 0, // Convert to number
      date: this.date.toString(),
      num: 1,
      siteId: 0
    };
    const Site = {
      nom: this.nom || '',
      ville: this.SelectedCity || '',
      id: 0, // Si nécessaire, modifier cet ID
      carte: 0, // Si nécessaire, modifier cette carte
      rue: '' // Si nécessaire, modifier cette rue
    };
    
    const combinedData = {
      essay: Essay,
      site: Site
    };
    
    console.log(combinedData);
    
    Essay.siteId = await (await this.infoChantierService.addSite(Site)).id;
    
    console.log("l'Id du site est " + Essay.siteId);
    this.essayService.addEssay(Essay).subscribe({
      next: () => {
        console.log('Données ajoutées avec succès à la base de données.');
        this.messageService.add({severity: 'info', summary: 'Encoded', detail: 'Données ajoutées avec succès à la base de donnée'});
      },
      error: (err) => {
        console.error('Erreur lors de l\'ajout des données : ', err);
        this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Erreur lors de l\'ajout des données'});
      }
    });
  }
  
  getList() { 
    this.cityService.getNomCourtsCommunes().subscribe({
      next: (citys) => {
        this.CityList = citys;
      },
      error: (err) => console.error(err)
    });
  }
  
  updateValue(defaultValue: number) {
    this.value2 = defaultValue;
  }
}
