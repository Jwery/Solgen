// worksite.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CityService } from '../../services/city.service';
import{ Site } from '../../model/Site'
import { InfochantierService } from '../../services/infochantier.service'; 

@Component({
  selector: 'app-worksite',
  templateUrl: './worksite.component.html',
  styleUrls: ['./worksite.component.scss'],
})
export class WorksiteComponent implements OnInit {
    @Input() 
    API:any;
    CityList:string[] = [];
    SelectedCity:string|null = null;

    
    constructor(private http: HttpClient, private cityService: CityService, private infoChantierService: InfochantierService) {
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

   // Méthode appelée lors de la sélection de la ville
   onCityChange(city: string) {
     const site: Site = {
       ville: city,
       id: 0,
       carte: 0,
       rue: '',
       nom: ''
     }; // Crée un objet Site avec juste la ville
     this.infoChantierService.addSite(site)
       .subscribe({
         next: () => {
           console.log('Ville ajoutée avec succès à la base de données.');
         },
         error: (err) => {
           console.error('Erreur lors de l\'ajout de la ville : ', err);
           // Ajoutez ici toute autre logique de gestion d'erreur
         }
       });
   }
}
