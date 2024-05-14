import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Site } from '../../model/Site'
import { ActivatedRoute } from '@angular/router';
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
  nom:string|null=null;

  
  constructor(private http: HttpClient, private site: SiteService, private infoChantierService: InfochantierService, private cityService: CityService, route:ActivatedRoute) { 
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

 onClick() {
  const site: Site = {
    nom: this.nom||'',
    ville: this.SelectedCity||'',
    id: 0, // Si nécessaire, modifier cet ID
    carte: 0, // Si nécessaire, modifier cette carte
    rue: '', // Si nécessaire, modifier cette rue
  };

   this.infoChantierService.addSite(site)
   .subscribe({
     next: () => {
       console.log('Chantier ajouté avec succès à la base de données.');
     },
     error: (err) => {
       console.error('Erreur lors de l\'ajout du chantier : ', err);
     }
   });
}
}
