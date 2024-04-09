import { Component } from '@angular/core';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-responsable',
  templateUrl: './responsable.component.html',
  styleUrl: './responsable.component.scss'
})
export class ResponsableComponent {

  items: any[] | undefined;

  selectedItem: any;


  suggestions: any[] = []; // Initialisez avec un tableau vide au lieu de null

  search(event: AutoCompleteCompleteEvent) {
      this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
  }
}
