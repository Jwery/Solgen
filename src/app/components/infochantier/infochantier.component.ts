import { Component, Input, OnChanges, OnInit, SimpleChanges,ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Site } from '../../model/Site'
import { InfochantierService } from '../../services/infochantier.service';
import { SiteService } from '../../services/site.service';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-infochantier',
  templateUrl: './infochantier.component.html',
  styleUrl: './infochantier.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfochantierComponent implements OnInit,OnChanges {
  
  CityList:string[] = [];
  nom:string|null=null
  SelectedCity:string|null =null;
  site:Site|null=null

  @Input()
  siteId:number=0;


  constructor(private http: HttpClient, private siteService: SiteService, private infoChantierService: InfochantierService, private cityService: CityService) { 
    if(this.siteId!=0){
      siteService.getById(this.siteId.toString())  .then((value) => {
        this.site=value;
      })
      
    }
    else{

    }
  }

   ngOnChanges(changes: SimpleChanges): void {
    if (!changes['site'].firstChange) {
       console.log(changes['site'].currentValue);
     }
   }

  onClick(site: Site) {
    this.infoChantierService.addSite(site)
    .subscribe({
      next: () => {
        console.log('Nom ajouté avec succès');
      },
      error: (err) => {
        console.error('Erreur lors de l\'ajout du nom du chantier');
      }
    });
  }

  async ngOnInit() {
    if(this.siteId!=0){
      this.site = await this.siteService.getById(this.siteId.toString())
      console.log(this.site?.id)
      console.log(this.siteId)
      this.nom=this.site?.nom||null;
      this.SelectedCity=this.site?.ville||null
    }
      this.getList()
  }

  getList(){
    this.cityService.getNomCourtsCommunes().subscribe({
      next:(citys =>{
          this.CityList=citys
      }),
      error:(err => console.error(err))
    });
  }

  onCityChange(city: string) {
    const site: Site = {
      ville: city,
      id: 0,
      carte: 0,
      rue: '',
      nom: ''
    };
    this.infoChantierService.addSite(site)
      .subscribe({
        next: () => {
          console.log('Ville ajoutée avec succès à la base de données.');
        },
        error: (err) => {
          console.error('Erreur lors de l\'ajout de la ville : ', err);
        }
      });
  }
  
}
