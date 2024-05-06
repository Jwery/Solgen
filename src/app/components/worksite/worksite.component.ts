import { Component, OnInit } from '@angular/core';
import { CommunesService } from '../../services/city.service';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { AppCity } from '../../model/City';


@Component({
  selector: 'app-worksite',
  templateUrl: './worksite.component.html',
  styleUrls: ['./worksite.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule]
})
export class WorksiteComponent implements OnInit {
  communes: string[] = []; 

  constructor(private communesService: CommunesService) { }
  ngOnInit(): void {
    
    this.communesService.getNomCourtsCommunes(20).subscribe(
      (data: string[]) => {
        
        this.communes = data;
      },
      (error: any) => {
        console.error('Une erreur s\'est produite :', error);
      }
    );
  }
}
