import { ItemTypeEnum } from 'app/enums';

export interface IItem {
  id: number;
  title: string;
  description: string;
  img: string;
  type: ItemTypeEnum;
}
