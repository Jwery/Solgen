import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggles',
  templateUrl: './toggles.component.html',
  styleUrl: './toggles.component.scss'
})
export class TogglesComponent  {
  VillesList: any;
  service: any;
  ngOnInit(): void {
    this.service.getDepList().subscribe((data:any)=>{
  this.VillesList=data;
});
}
}