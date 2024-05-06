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
  private userService!:UserService;
  modifying:boolean = false;

  constructor(private router: Router, userService: UserService, formBuilder: FormBuilder,route: ActivatedRoute){
    
    this.user = route.snapshot.data['user']
    this.formGroup = formBuilder.group
    ({
        id:[this.user.id],
        firstName: [this.user.firstName,[Validators.required]],
        lastName: [this.user.lastName,[Validators.required]],
        email: [this.user.email, [Validators.required]],
        password: [null, [Validators.required,(c: any) => this.validateRepeatPassword(c),, Validators.minLength(8)]],
        repeatPassword: [null,  [Validators.required]],
      })
      this.formGroup.disable()
    }

  onSubmit(event?: Event){
    this.userService.update(this.formGroup.value).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      }, error: err => {
      console.error(err);
      }});
      location.reload()
    }
    validateRepeatPassword(control: AbstractControl) {
      this.modifying=false
      if(control.value===null){
        return {notMatch:true}
      }
      if(control.value !== this.formGroup.controls['repeatPassword'].value) {
        return { notMatch: true }
      }

      return null
    };

    modify(){
      console.log('hello')
      this.modifying=true
      this.formGroup.enable()
    }

    logOut(){
      this.userService.logOut()
      this.router.navigate(['connexion'])
    }
}

