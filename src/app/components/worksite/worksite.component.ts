import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CityService } from '../../services/city.service'
@Component({
  selector: 'app-worksite',
  templateUrl: './worksite.component.html',
  styleUrls: ['./worksite.component.scss'],
})
export class WorksiteComponent implements OnInit {
    @Input() 
    // gruData: any; // Déclaration de la propriété gruData avec l'annotation @Input
    API:any;
    CityList:string[] = []
  
    constructor(private http: HttpClient, private cityService: CityService) {
    }
  
    ngOnInit() {
      this.getList()
    }
   

   getList(){
     this.cityService.getNomCourtsCommunes().subscribe({
        next:(citys=>{
            this.CityList=citys
        }),
        error:(err => console.error(err))
    
   });
   }
}
