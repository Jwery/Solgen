import { Component, OnInit } from '@angular/core';
import { CityService } from '../service/city-service.service';

interface CityRecord {
  fields: {
    nom_commune: string; // Assurez-vous que le nom de la propriété correspond à celui de votre API
    // Ajoutez d'autres propriétés si nécessaire
  }
}

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class TogglesComponent implements OnInit {
  municipalities: string[] | undefined;

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.loadCities();
  }

  loadCities() {
    this.cityService.getCities().subscribe((data: { records: CityRecord[] }) => {
      this.municipalities = data.records.map(record => record.fields.nom_commune);
    });
  }
}