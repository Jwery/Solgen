import { Component, OnInit } from '@angular/core';
interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-worksite',
  templateUrl: './worksite.component.html',
  styleUrl: './worksite.component.scss'
})
export class WorksiteComponent implements OnInit {

  cities: City[] | undefined;

  selectedCity: City | undefined;

  formGroup: any;

  ngOnInit() {
      this.cities = [
          { name: 'New York', code: 'NY' },
          { name: 'Rome', code: 'RM' },
          { name: 'London', code: 'LDN' },
          { name: 'Istanbul', code: 'IST' },
          { name: 'Paris', code: 'PRS' }
      ];
  }
}

