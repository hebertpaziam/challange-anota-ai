import { JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

import { IItem } from 'app/interfaces';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() item!: IItem;
}
