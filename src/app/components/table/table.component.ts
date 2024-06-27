import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Input } from '@angular/core';

@Component({ selector: 'TableComponent', templateUrl: './table.component.html', styleUrl: './table.component.scss' }) 

  export class TableComponent {

    @Input() gruData: any; url: string = '/api/Essay' 

      link:any;

    constructor(private http: HttpClient) {}

      ngOnInit() { this.http.get(this.url).subscribe(res => {this.link = res;}) 

      }; 
}
