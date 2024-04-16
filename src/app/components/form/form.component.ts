import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'dropdown-reactive-forms-demo',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
  cities: City[] | undefined;

  selectedCity: City | undefined;

  public form: FormGroup;

  constructor (fb:FormBuilder){
    this.form=fb.group({
      name: 'New York', code: 'NY' 
    })
    
  }

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