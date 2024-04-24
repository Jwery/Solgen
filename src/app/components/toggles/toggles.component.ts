import { Component, OnInit } from '@angular/core';
import { MunicipalityService } from '../service/municipality-service.service';

@Component({
  selector: 'app-toggles',
  templateUrl: './toggles.component.html',
  styleUrl: './toggles.component.scss'
})

export class TogglesComponent  implements OnInit {
  municipalities: any[]=["ANTOING"];
  selectedCity: any = "ANTOING";

  constructor(private municipalityServices: MunicipalityService) { }

  ngOnInit() {
    this.municipalityServices.getMunicipalities().subscribe(data => {
      this.municipalities = data.map((recorder: { nom: any; }) => recorder.nom);
      this.selectedCity = this.municipalities[0];
    });
    console.log("coucou")
  }

  selectCity(city: string) {
    this.selectedCity = city;
  }
}