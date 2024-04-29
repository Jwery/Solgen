import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

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

  constructor(private messageService: MessageService) {}

  onUpload(event: any) {
    if (event.files && event.files.length > 0) {
      for (let file of event.files) {
        // Vérification de l'extension du fichier
        if (!this.isValidFileExtension(file)) {
          this.messageService.add({severity: 'error', summary: 'Error', detail: 'Seuls les fichiers avec l\'extension .GRU sont autorisés.'});
          return;
        }

        // Lecture du contenu du fichier
        this.readUploadedFile(file);
      }
      this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }
  }

  readUploadedFile(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      if (reader.result instanceof ArrayBuffer) {
        console.error('Erreur de lecture du fichier .GRU : le contenu est un ArrayBuffer.');
        return;
      }

      const content = reader.result as string;
      try {
        // Suppose que le contenu est un objet JSON
        const parsedData = JSON.parse(content);
        this.gruData = parsedData.Data; // Supposons que les données sont stockées dans une propriété "Data"
      } catch (error) {
        console.error('Erreur de lecture du fichier .GRU :', error);
      }
    };
    reader.readAsText(file);
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