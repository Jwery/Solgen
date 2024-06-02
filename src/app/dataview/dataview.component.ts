import { Component, OnInit } from '@angular/core';
import { EssayService } from '../services/essay.service';

@Component({
  selector: 'app-dataview',
  templateUrl: './dataview.component.html',
  styleUrls: ['./dataview.component.scss']
})
export class DataviewComponent implements OnInit {
  essay: any[] = [];

  constructor(private essayService: EssayService) {}

  ngOnInit(): void {
    this.essayService.getEssay()
      .subscribe({
        next: (data) => {
          this.essay = data;
        },
        error: (error) => console.error(error)
      });
  }

  trackById(index: number, item: any): number {
    return item.Id;
  }
}
