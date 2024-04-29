import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})
export class InscriptionComponent {
  constructor(private router: Router) {}

  onSubmit(event?: Event) {
    event?.preventDefault(); // Pour empêcher le rechargement de la page

    const nom = (document.getElementById('nomInput') as HTMLInputElement).value;
    const prenom = (document.getElementById('prenomInput') as HTMLInputElement).value;
    const email = (document.getElementById('emailInput') as HTMLInputElement).value;
    const password = (document.getElementById('passwordInput') as HTMLInputElement).value;
    const repeatPassword = (document.getElementById('repeatPasswordInput') as HTMLInputElement).value;

    // Vérification des restrictions pour le mot de passe et l'email
    if (password.length < 8) {
      alert("Le mot de passe doit contenir au moins 8 caractères.");
      return;
    }
    
    if (password !== repeatPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    if (!this.validateEmail(email)) {
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
}
