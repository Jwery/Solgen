import { Component,Input,Output, output } from '@angular/core';  

@Component({
  selector: 'app-chantier',
  templateUrl: './chantier.component.html',
  styleUrl: './chantier.component.scss',
})
export class ChantierComponent {
  @Output()value: string | undefined;
  @Input() inputValue:string|null=null
  placeHolder:string=this.inputValue||"Nom du chantier"
  constructor(){
    console.log("chantier = "+ this.inputValue)
  }
}
