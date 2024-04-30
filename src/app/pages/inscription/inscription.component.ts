import { Component,Signal } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AppUser } from '../../model/user'

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})
export class InscriptionComponent {
  constructor(private router: Router, private UserService: UserService ) {
    this.LitUsers= UserService.getall();
  }
  

  FirstName:string = '';
  LastName:string = '';
  Email:string = '';
  Password:string = '';

  LitUsers:Signal<AppUser[]>;


  onSubmit(event?: Event) {

    event?.preventDefault(); // Prevent page reload
    

    const firstNameInput = document.getElementById('firstNameInput') as HTMLInputElement ;
    const lastNameInput = document.getElementById('lastNameInput') as HTMLInputElement ;
    const emailInput = document.getElementById('emailInput') as HTMLInputElement ;
    const passwordInput = document.getElementById('passwordInput') as HTMLInputElement ;
    const repeatPasswordInput = document.getElementById('repeatPasswordInput') as HTMLInputElement ;


    this.FirstName = firstNameInput.value;
    this.LastName = lastNameInput.value;
    this.Email = emailInput.value;
    this.Password = passwordInput.value;
    const repeatPassword = repeatPasswordInput.value;

    // Vérification des restrictions pour le mot de passe et l'email
    if (this.Password.length < 8) {
      alert("Le mot de passe doit contenir au moins 8 caractères.");
      return;
    }
    
    if (this.Password !== repeatPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    if (!this.validateEmail(this.Email)) {
      alert("Adresse e-mail invalide.");
      return;
    }
    const checkbox = document.getElementById('exampleCheck1') as HTMLInputElement;
    if (!checkbox.checked) {
      alert("Veuillez accepter les conditions d'utilisation.");
      return; 
    }

    this.UserService.add( {

      firstName : this.FirstName,
      lastName : this.LastName,
      email : this.Email,
      password : this.Password,
      
    } as AppUser); console.error(this.FirstName);
    // this.router.navigate(['/dashboard']);
  }

  // Fonction pour valider l'e-mail
  validateEmail(email: string): boolean {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  
}
