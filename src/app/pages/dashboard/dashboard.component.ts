import { Component } from '@angular/core';
import { AppUser } from '../../model/user';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  users: AppUser[] = [];

  constructor(private userservice: UserService){
  
  }

  ngOnInit(): void{
    this.userservice.getuser()
    .subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (error) => console.error(error)
    })
  }

  

}
