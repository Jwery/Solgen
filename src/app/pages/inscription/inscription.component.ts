import { Component,Signal } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user'

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})
export class InscriptionComponent {
  constructor(private router: Router, private UserService: UserService ) {
    this.User= UserService.getall();
  }
  

  FirstName:string = '';
  LastName:string = '';
  Email:string = '';
  Password:string = '';

  User:Signal<User[]>;


  onSubmit(event?: Event) {
    event?.preventDefault(); // Prevent page reload

    const firstNameInput = document.getElementById('firstnameInput2') as HTMLInputElement ;
    const lastNameInput = document.getElementById('lastnameInput') as HTMLInputElement ;
    const emailInput = document.getElementById('emailInput') as HTMLInputElement ;
    const passwordInput = document.getElementById('passwordInput') as HTMLInputElement ;
    const repeatPasswordInput = document.getElementById('repeatPasswordInput') as HTMLInputElement ;

    if (!firstNameInput || !lastNameInput || !emailInput || !passwordInput || !repeatPasswordInput) {
        console.error('One or more input elements not found.');
        if (!firstNameInput){
            console.error('firstname est null');
        }
        if (!lastNameInput){
          console.error('lastname est null');
      }
      if (!emailInput){
        console.error('email est null');
    }else{
      console.error(emailInput.value);
    }
    if (!this.Password){
      console.error('password est null');
  }
        
        return;
    }

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

    // Soumettre le formulaire si toutes les conditions sont remplies
    // Ici, vous pouvez ajouter le code pour soumettre le formulaire à votre backend
    this.router.navigate(['/dashboard']);
  }

  // Fonction pour valider l'e-mail
  validateEmail(email: string): boolean {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  add() {
    if(!this.FirstName || !this.LastName || !this.Email || !this.Password){
      return;
    }
  this.UserService.add({
    firstName: this.FirstName,
    lastName: this.LastName,
    email: this.Email,
    password: this.Password

  });
  }
}
