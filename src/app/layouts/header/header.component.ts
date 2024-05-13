import { Component } from '@angular/core';
import { SiteService } from '../../services/site.service';
import { Site } from '../../model/Site';
import { ConnectedOverlayScrollHandler } from 'primeng/dom';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  sites: Site[] = [];
  name:string='';
  selectedSite! : Site;
  /**
   *
   */
  constructor(private site_service: SiteService) {
    
  }

  ngOnInit(): void{
    this.site_service.getSites().subscribe({
      next:(sites) => {this.sites = sites}
    ,
    error: (error)=> console.error(error)})
  }
}
