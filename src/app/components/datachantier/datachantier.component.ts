import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Essay } from '../../model/Essay'
import { ActivatedRoute } from '@angular/router';
import { EssayService } from '../../services/essay.service';
import { SiteService } from '../../services/site.service';

@Component({
  selector: 'app-datachantier',
  templateUrl: './datachantier.component.html',
  styleUrl: './datachantier.component.scss'
})


export class DatachantierComponent{


  // Begin Nappe class
  value: number = 0;

  // Begin Intervalle
  value1: number = 20;
  value2: number = 0;
  value3: number = 25;
  valueDefault1: number = 0.25;
  valueDefault2: number = 0.20;
  date: Date= new Date(2024); // Specify type

  updateValue(defaultValue: number) {
    this.value2 = defaultValue;
  }

  constructor(private http: HttpClient, private site: SiteService, private essayService: EssayService, route: ActivatedRoute) {}

  onClick() {
    const essay: Essay = {
      id: 0,
      nappe: this.value,
      interv: this.value2,
      date : this.date.toString(),
      num : 1,
      siteId : 1
    };

    this.essayService.addEssay(essay)
      .subscribe({
        next: () => {
          console.log('Données ajoutées avec succès à la base de données.');
        },
        error: (err) => {
          console.error('Erreur lors de l\'ajout des données : ', err);
        }
      });
  }
}
