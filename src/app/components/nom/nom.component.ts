import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Site } from '../../model/Site'
import { InfochantierService } from '../../services/infochantier.service';
import { SiteService } from '../../services/site.service';

@Component({
  selector: 'app-nom',
  templateUrl: './nom.component.html',
  styleUrl: './nom.component.scss',
})
export class NomComponent {

  constructor(private http: HttpClient, private site: SiteService, private infoChantierService: InfochantierService) { // Ajout de infoChantierService dans le constructeur
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
}
