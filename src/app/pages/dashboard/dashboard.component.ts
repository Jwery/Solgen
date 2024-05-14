import { Component,Inject,OnInit} from '@angular/core';
import { AppUser } from '../../model/user';
import { Site } from '../../model/Site';
import { UserService } from '../../services/user.service';
import { SiteService } from '../../services/site.service';
import { ActivatedRoute, Router } from '@angular/router'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  users: AppUser[] = [];

  site:Site|null=null
  id:string|null=null
  ville:string|null=null
  nom:string|null=null

  constructor(private router: Router, private userservice: UserService,route: ActivatedRoute,private siteService:SiteService){
    if (route.snapshot.data['site']!=null){
      this.site=route.snapshot.data['site']
      console.log(this.site)
    } 
  }
  

  ngOnInit(): void{
    if(this.userservice.islogged()){
    this.userservice.getuser()
    .subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (error) => console.error(error)
    })
  }
  else{
    this.router.navigate(['/connexion']);
  }
}

}
