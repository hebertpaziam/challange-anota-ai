import { Component, Input } from '@angular/core';

import { ICardItem } from '../../interfaces/card-item.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() item!: ICardItem;
}
