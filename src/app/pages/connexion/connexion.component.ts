import { Component, Signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router'
import { AppUser } from '../../model/user'
import { MessageService } from 'primeng/api';
 
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})
export class ConnexionComponent {

  formGroup!: FormGroup
  LitUsers:Signal<AppUser[]>;
  constructor(private router: Router, private userService: UserService, formBuilder: FormBuilder,private messageService:MessageService){

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
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'L\'adresse mail et/ou le mot de passe est erroné'});
      }});
  }
}
