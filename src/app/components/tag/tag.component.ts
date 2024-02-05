import { Component, HostBinding, Input } from '@angular/core';

import { ItemTypeEnum } from 'app/enums';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss',
})
export class TagComponent {
  readonly itemTypeEnum = ItemTypeEnum;
  @Input() type!: ItemTypeEnum;

  @HostBinding('class') get classType() {
    return {
      [ItemTypeEnum.LANDSCAPE]: '-landscape',
      [ItemTypeEnum.FLOWER]: '-flower',
      [ItemTypeEnum.PIZZA]: '-pizza',
    }[this.type];
  }
}
