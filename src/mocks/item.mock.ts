import { faker } from '@faker-js/faker';

import { ItemTypeEnum } from 'app/enums';
import { IItem } from 'app/interfaces';

export const ItemMock = (props: Partial<IItem> = {}): IItem => ({
  id: faker.number.int(),
  description: faker.lorem.paragraph(),
  img: faker.image.url(),
  title: faker.lorem.words(),
  type: faker.helpers.arrayElement([
    ItemTypeEnum.LANDSCAPE,
    ItemTypeEnum.FLOWER,
    ItemTypeEnum.PIZZA,
  ]),
  ...props,
});
