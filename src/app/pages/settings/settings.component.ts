import { ChangeDetectionStrategy, Component, Signal} from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router'
import { AppUser } from '../../model/user'
import { FullUser } from '../../model/fullUser';
import { firstValueFrom } from 'rxjs';
import { userResolver } from '../../resolver/userResolver';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
export class SettingsComponent {
  formGroup!: FormGroup
  user!:FullUser
  modifying:boolean = false;

  constructor(private router: Router, private userService: UserService, formBuilder: FormBuilder,route: ActivatedRoute){
    
    if(userService.islogged()){
    this.user = route.snapshot.data['user']
    this.formGroup = formBuilder.group
    ({
        id:[this.user.id],
        firstName: [this.user.firstName,[Validators.required]],
        lastName: [this.user.lastName,[Validators.required]],
        email: [this.user.email, [Validators.required]],
      // password: [null, [ Validators.minLength(8)]],
        // repeatPassword: [null,  [(c: any) => this.validateRepeatPassword(c)]],
      })
      this.formGroup.disable()
    }
    else{
      this.router.navigate(['/connexion']);
    }
    }

  onSubmit(event?: Event){
    this.formGroup.disable()
    var user:FullUser = this.formGroup.value as FullUser
    this.userService.update(user).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      }, error: err => {
      console.error(err);
      }});
    }


  validateRepeatPassword(control: AbstractControl) {
      this.modifying=false
      if(this.formGroup.controls['password'].value===null){
        return null
      }
      if(control.value===null){
        return {notMatch:true}
      }
      if(control.value !== this.formGroup.controls['password'].value) {
        return { notMatch: true }
      }

      return null
    }

  modify(){
      this.modifying=true
      this.formGroup.enable()
    }

  logOut(){
      this.userService.logOut()
      this.router.navigate(['connexion'])
    }

    modifyPassword(){
      this.router.navigate(['modifyPassword'])
    }
}

