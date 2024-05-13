import { ChangeDetectionStrategy, Component,signal} from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router'
import { AppUser } from '../../../model/user'
import { FullUser } from '../../../model/fullUser';
import { firstValueFrom } from 'rxjs';
import { userResolver } from '../../../resolver/userResolver';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './modifyPassword.component.html',
  styleUrl: './modifyPassword.component.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
export class ModifyPasswordComponent {
    formGroup: FormGroup

    user!:FullUser


    /**
     *
     */
    constructor(private router: Router, private userService: UserService, private formBuilder:FormBuilder,route: ActivatedRoute){
    
        this.user = route.snapshot.data['user']
        this.formGroup = this.formBuilder.group
        ({
            id:[this.user.id],
            password: ['', [ Validators.required,Validators.minLength(8)]],
            repeatPassword: ['',  [Validators.required,(c: any) => this.validateRepeatPassword(c)]],
        })
    }

    validateRepeatPassword(control: AbstractControl) {
           if(this.formGroup===undefined){
            return null
           }
            if(control.value !== this.formGroup.controls['password'].value) {
              return { notMatch: true }
            }
      
            return null
          }

          onSubmit(event?: Event){
            this.formGroup.disable()
            var user:FullUser = this.formGroup.value as FullUser
            user.id=this.user.id
            this.userService.update(user).subscribe({
              next: () => {
                this.router.navigate(['/dashboard']);
              }, error: err => {
              console.error(err);
              }});
            }
}