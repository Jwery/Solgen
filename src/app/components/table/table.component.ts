import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'TableComponent',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent  {
  url: string = '../../assets/fakedb.json'
  fakedb:any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {this.fakedb = res;})
      };
  }