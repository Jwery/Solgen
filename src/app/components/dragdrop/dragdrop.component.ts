import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DragdropService } from '../../services/dragdrop.service';
import { HttpClient } from '@angular/common/http';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'DragdropComponent',
  templateUrl: './dragdrop.component.html',
  providers: [MessageService]
})
export class DragdropComponent {

  gruData: any;
  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService, private dragdropService: DragdropService) {}

  onUpload(event: any) {
    if (event.files && event.files.length > 0) {
      for (let file of event.files) {
        // Vérification de l'extension du fichier
        if (!this.isValidFileExtension(file)) {
          this.messageService.add({severity: 'error', summary: 'Error', detail: 'Seuls les fichiers avec l\'extension .GRU sont autorisés.'});
          return;
        }

        const formData = new FormData();
        formData.append('file', file);

        this.dragdropService.uploadFile(formData).subscribe(
          (data) => {
            this.gruData = data;
            this.uploadedFiles.push(file);
            this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: file.name + ' uploadé avec succès.'});
          },
          (error) => {
            console.error('Erreur lors de l\'upload du fichier :', error);
            this.messageService.add({severity: 'error', summary: 'Error', detail: 'Erreur lors de l\'upload du fichier.'});
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
