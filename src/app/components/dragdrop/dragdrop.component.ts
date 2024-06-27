import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DragdropService } from '../../services/dragdrop.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'DragdropComponent',
  templateUrl: './dragdrop.component.html',
  providers: [MessageService]
})
export class DragdropComponent {

  gruData: any;
  uploadedFiles: any[] = [];
  productForm: FormGroup;
  @Input() essayId: number = 0;

  constructor(private messageService: MessageService, private dragdropService: DragdropService, private formBuilder: FormBuilder, private httpClient: HttpClient) {
    this.productForm = this.formBuilder.group({
      File: [null],
    });
  }

  onUpload(event: any) {
    const files = event.files || event.originalEvent?.dataTransfer?.files || event.target?.files;

    if (files && files.length > 0) {
      for (let file of files) {
        // Vérification de l'extension du fichier
        if (!this.isValidFileExtension(file)) {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Seuls les fichiers avec l\'extension.GRU sont autorisés.' });
          return;
        }

        const formData = new FormData();
        formData.append('file', file);
        this.productForm.controls['File'].setValue(file);

        this.dragdropService.uploadFile(this.productForm, this.essayId).subscribe(
          (data) => {
            this.gruData = data;
            this.uploadedFiles.push(file);
            console.log('Fichier ajouté avec succès.');
            this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: file.name + 'ploadé avec succès.' });
          },
          (error) => {
            console.error('Erreur lors de l\'upload du fichier :', error);
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erreur lors de l\'upload du fichier.' });
            
          }
        );
      }
    }
  }

  isValidFileExtension(file: File): boolean {
    const allowedExtensions = ['GRU'];
    const extension = file.name.split('.').pop()?.toUpperCase();
    if (extension) {
      return allowedExtensions.includes(extension);
    }
    return false;
  }
}