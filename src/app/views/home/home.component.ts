import { Component, OnInit } from '@angular/core';

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
  items: IItem[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.getItems().subscribe((items) => (this.items = items));
  }
}
