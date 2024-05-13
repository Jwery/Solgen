import { Component } from '@angular/core';
import { SiteService } from '../../services/site.service';
import { Site } from '../../model/Site';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  sites: Site[] = [];
  name:string='';
  /**
   *
   */
  constructor(private site_service: SiteService) {
    
  }

  ngOnInit(): void{
  }

  search(){
    this.site_service.getByName(this.name)
    .subscribe({
      next: (sites) => {
        this.sites = sites;
      },
      error: (error) => console.error(error)
    })
  }
}
