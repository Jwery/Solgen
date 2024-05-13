import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CityService } from '../../services/city.service';
import { InfochantierService } from '../../services/infochantier.service'; // Importez le service InfochantierService

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
     this.infoChantierService.addCityToSite(city)
       .subscribe({
         next: () => {
           console.log('Ville ajoutée avec succès à la base de données.');
           // Ajoutez ici toute autre logique nécessaire après l'ajout de la ville
         },
         error: (err) => {
           console.error('Erreur lors de l\'ajout de la ville : ', err);
           // Ajoutez ici toute autre logique de gestion d'erreur
         }
       });
   }
}
