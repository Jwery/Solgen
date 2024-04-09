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
  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) {}

  onUpload(event: any) {
    if (event.files && event.files.length > 0) {
      for (let file of event.files) {
        // Lecture du contenu du fichier
        this.readUploadedFile(file);
      }
      this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }
  }

  readUploadedFile(file: File) {
    const reader = new FileReader();

    reader.onload = () => {
      // `result` contient le contenu du fichier sous forme de base64
      const fileContent: string | ArrayBuffer | null = reader.result;
      console.log(fileContent);
      // Vous pouvez maintenant traiter le contenu du fichier ici
    };

    // Déclenche la lecture du fichier
    reader.readAsText(file);
  }
}
