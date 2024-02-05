import { Component, Input } from '@angular/core';

import { IItem } from 'app/interfaces';

import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [TagComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() item!: IItem;
}
