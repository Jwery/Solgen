import { Component, Signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router'
import { AppUser } from '../../model/user'
 
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})
export class ConnexionComponent {

  formGroup!: FormGroup
  LitUsers:Signal<AppUser[]>;
  constructor(private router: Router, private userService: UserService, formBuilder: FormBuilder){

    this.LitUsers = userService.getall();
    this.formGroup = formBuilder.group
    ({
      email: [ null, [Validators.required]],
      password: [ null, [Validators.required]]
    })
  }


  onSubmit(event?: Event){
    this.userService.login(this.formGroup.value).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      }, error: err => {
      console.error(err);
      }});
  }
 
}
