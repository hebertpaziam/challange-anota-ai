import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMock } from 'mocks/item.mock';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.item = ItemMock()
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should emit "onRemove" event', () => {
    const onRemoveSpy = jest.spyOn(component.onRemove, 'emit');
    component.removeItem();
    expect(onRemoveSpy).toHaveBeenCalledTimes(1);
  });
});
