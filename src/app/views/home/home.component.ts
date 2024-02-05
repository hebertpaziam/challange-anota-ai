import { Component, computed, OnInit, signal } from '@angular/core';

import { CardComponent, SearchComponent } from 'app/components';
import { IItem } from 'app/interfaces';
import { ItemService } from 'app/services';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private fetchedItems = signal([] as Array<IItem>);

  searchTerm = signal('');

  items = computed(() =>
    this.fetchedItems().filter((item: IItem) => {
      const normalizedTitle = this.normalizeTerm(item.title);
      const normalizedDesc = this.normalizeTerm(item.description);
      const normalizedTerm = this.normalizeTerm(this.searchTerm());

      return (
        normalizedTitle.includes(normalizedTerm) ||
        normalizedDesc.includes(normalizedTerm)
      );
    })
  );

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService
      .getItems()
      .subscribe((items) => this.fetchedItems.set(items));
  }

  removeItem(removedItem: IItem) {
    this.fetchedItems.update((items) =>
      items.filter((item) => item.id !== removedItem.id)
    );
  }

  searchItems(term: string) {
    this.searchTerm.set(term);
  }

  private normalizeTerm(value: string) {
    return value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }
}
