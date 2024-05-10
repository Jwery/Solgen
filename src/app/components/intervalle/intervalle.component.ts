import { Component } from '@angular/core';

@Component({
  selector: 'app-intervalle',
  templateUrl: './intervalle.component.html',
  styleUrl: './intervalle.component.scss'
})
export class IntervalleComponent {
  value1: number = 20;
  value2: number|null = null;
  value3: number = 25;
  value4: number = 0.25;

}
