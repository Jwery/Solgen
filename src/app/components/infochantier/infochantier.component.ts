import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Site } from '../../model/Site'
import { InfochantierService } from '../../services/infochantier.service';
import { SiteService } from '../../services/site.service';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-infochantier',
  templateUrl: './infochantier.component.html',
  styleUrl: './infochantier.component.scss'
})
export class InfochantierComponent implements OnInit {
  @Input() 
  API:any;
  CityList:string[] = [];
  SelectedCity:string|null = null;

  
  constructor(private http: HttpClient, private site: SiteService, private infoChantierService: InfochantierService, private cityService: CityService) { 
  }


  onClick(site: Site) {
    this.infoChantierService.addSite(site)
    .subscribe({
      next: () => {
        console.log('Nom ajouté avec succès');
      },
      error: (err) => {
        console.error('Erreur lors de l\'ajout du nom du chantier');
      }
    });
  }

  ngOnInit() {
    this.getList()
  }
 

 getList(){
   this.cityService.getNomCourtsCommunes().subscribe({
      next:(citys =>{
          this.CityList=citys
      }),
      error:(err => console.error(err))
   });
 }

 onCityChange(city: string) {
   const site: Site = {
     ville: city,
     id: 0,
     carte: 0,
     rue: '',
     nom: ''
   };
   this.infoChantierService.addSite(site)
     .subscribe({
       next: () => {
         console.log('Ville ajoutée avec succès à la base de données.');
       },
       error: (err) => {
         console.error('Erreur lors de l\'ajout de la ville : ', err);
       }
     });
 }
  
}
