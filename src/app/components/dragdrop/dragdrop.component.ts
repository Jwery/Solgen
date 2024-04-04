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
        this.uploadedFiles.push(file);
      }
      this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }
  }

}