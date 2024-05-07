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
    API:any;
    CityList:string[] = [];
  
    constructor(private http: HttpClient, private cityService: CityService) {
    }
  
    ngOnInit() {
      this.getList()
    }
   

   getList(){
     this.cityService.getNomCourtsCommunes().subscribe({
        next:(citys =>{
          console.log(citys);
            this.CityList=citys
        }),
        error:(err => console.error(err))
    
   });

   }
}
