
import { Component } from '@angular/core';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-worksite',
  templateUrl: './worksite.component.html',
  styleUrl: './worksite.component.scss'
})
export class WorksiteComponent {
  selectedItem: any;

  filteredItems: any[] | undefined;

  items: any[] | undefined;

  filterItems(event: AutoCompleteCompleteEvent) {
      //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
      let filtered: any[] = [];
      let query = event.query;

      for (let i = 0; i < (this.items as any[]).length; i++) {
          let item = (this.items as any[])[i];
          if (item.label.toLowerCase().indexOf(query.toLowerCase()) == 0) {
              filtered.push(item);
          }
      }

      this.filteredItems = filtered;
  }

  ngOnInit() {
      this.items = [];
      for (let i = 0; i < 10000; i++) {
          this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
      }
  }
}
