import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { ICardItem } from './interfaces/card-item.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SearchComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  items: ICardItem[];

  constructor() {
    this.items = [];
  }
}
