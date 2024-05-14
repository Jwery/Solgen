import { ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { SiteService } from '../../services/site.service';
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { Site } from '../../model/Site';

@Component({
    selector: 'app-siteForm',
    templateUrl: './siteForm.component.html',
    styleUrl: './siteForm.component.scss',
    changeDetection: ChangeDetectionStrategy.Default
})
export class siteFormComponent {
    formGroup!: FormGroup
    @Input()site:Site|null=null

    constructor(private router: Router, private siteService: SiteService, formBuilder: FormBuilder,route: ActivatedRoute){
        if(this.site != null){
            this.formGroup = formBuilder.group
            ({
                id:[this.site.id],
                nom: [this.site.nom,[Validators.required]],
                ville: [this.site.ville,[Validators.required]],
            })
        }
        else{
            this.formGroup = formBuilder.group
            ({
                id:[0],
                nom: [null,[Validators.required]],
                ville: [null,[Validators.required]],
            })
        }
        
    }

    onSubmit(event?: Event){
        var site:Site = this.formGroup.value as Site
        this.siteService.update(site).subscribe({
            next: () => {}, 
            error: err => 
            {
                console.error(err);
            }
        });
    }

}

