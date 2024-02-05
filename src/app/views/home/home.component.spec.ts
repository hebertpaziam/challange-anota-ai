import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { faker } from '@faker-js/faker';
import { of } from 'rxjs';

import { ItemMock } from 'mocks/item.mock';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should call the items service to get items on init', () => {
    const mockItems = Array.from({ length: 10 }, (_, index) => ItemMock());

    const itemsServiceGetItemsSpy = jest
      .spyOn(component['itemService'], 'getItems')
      .mockReturnValue(of(mockItems));

    component.ngOnInit();

    expect(itemsServiceGetItemsSpy).toHaveBeenCalled();
    expect(component['fetchedItems']()).toStrictEqual(mockItems);
  });

  test('should remove an item', () => {
    const mockItems = Array.from({ length: 10 }, (_, index) => ItemMock());
    const removedItem = faker.helpers.arrayElement(mockItems);
    component['fetchedItems'].set(mockItems);

    component.removeItem(removedItem);

    expect(component.items()).toHaveLength(9);
    expect(component.items()).toStrictEqual(
      mockItems.filter((item) => item !== removedItem)
    );
  });

  test('should perform a search', () => {
    const mockItems = Array.from({ length: 10 }, (_, index) => ItemMock());
    const selectedItem = faker.helpers.arrayElement(mockItems);
    const searchTerm = selectedItem.description;

    component['fetchedItems'].set(mockItems);

    component.searchItems(searchTerm);

    expect(component.searchTerm()).toStrictEqual(searchTerm);
    expect(component.items()).toStrictEqual(
      mockItems.filter((item) => item.description.includes(searchTerm))
    );
  });

  test('should normalize a term', () => {
    expect(component['normalizeTerm']('áàâãéèêíïóôõöúçñ')).toStrictEqual(
      'aaaaeeeiiooooucn'
    );

    expect(component['normalizeTerm']('ÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ')).toStrictEqual(
      'aaaaeeeiiooooucn'
    );
  });
});
