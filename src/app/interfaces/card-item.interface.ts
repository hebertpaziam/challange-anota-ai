import { CardTypeEnum } from '../enums/card-type.enum';

export interface ICardItem {
  id: number;
  title: string;
  description: string;
  img: string;
  type: CardTypeEnum;
}
