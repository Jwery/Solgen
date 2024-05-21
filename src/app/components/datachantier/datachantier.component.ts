import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-datachantier',
  templateUrl: './datachantier.component.html',
  styleUrl: './datachantier.component.scss'
})


export class DatachantierComponent {


  //Begin Nappe class
  value: number|null = null;


  //begin Intervalle
  value1: number = 20;
  value2: number|null = null;
  value3: number = 25;
  valueDefault1: number = 0.25;
  valueDefault2: number = 0.20;
date: any;

  updateValue(defaultValue: number) {
    this.value2 = defaultValue;
    //begin date
    date: Date 
  }
}
