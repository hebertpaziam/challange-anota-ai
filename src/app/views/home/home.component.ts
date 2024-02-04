import { Component } from '@angular/core';

import { CardComponent, NavbarComponent, SearchComponent } from 'app/components';
import { IItem } from 'app/interfaces';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, SearchComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  items: IItem[];

  constructor() {
    this.items = [];
  }
}
