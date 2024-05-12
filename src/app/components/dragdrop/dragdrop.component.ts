import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DragdropService } from '../../services/dragdrop.service';

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

        // Appel du service pour récupérer les données du fichier
        this.dragdropService.GetEssayFromFile(file.name).subscribe(
          (data) => {
            this.gruData = data;
            this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
          },
          (error) => {
            console.error('Erreur lors de la récupération des données du fichier :', error);
            this.messageService.add({severity: 'error', summary: 'Error', detail: 'Erreur lors de la récupération des données du fichier.'});
          }
        );
      }
    }
  }

  isValidFileExtension(file: File): boolean {
    const allowedExtensions = ['.GRU'];
    const extension = file.name.split('.').pop()?.toUpperCase(); // Obtient l'extension du fichier et convertit en majuscules
    if (extension) {
      return allowedExtensions.includes(extension);
    }
    return false; // Retourne faux si l'extension n'est pas définie
  }
}
