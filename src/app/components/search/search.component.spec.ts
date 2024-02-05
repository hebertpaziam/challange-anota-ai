import { ComponentFixture, TestBed } from '@angular/core/testing';
import { faker } from '@faker-js/faker';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should setup term subject on init', () => {
    const termSubjectPipeSpy = jest.spyOn(component['termSubject'], 'pipe');
    const termSubjectSubscribeSpy = jest.spyOn(
      component['termSubject'],
      'subscribe'
    );

    component.ngOnInit();

    expect(termSubjectPipeSpy).toHaveBeenCalled();
    expect(termSubjectSubscribeSpy).toHaveBeenCalled();
  });

  test('should complete subscription of term subject on destroy', () => {
    const termSubjectCompleteSpy = jest.spyOn(
      component['termSubject'],
      'complete'
    );

    component.ngOnDestroy();

    expect(termSubjectCompleteSpy).toHaveBeenCalled();
  });

  test('should perform a search setting term and trigger next in the term subject', () => {
    const termSubjectNextSpy = jest.spyOn(component['termSubject'], 'next');
    const term = faker.lorem.words();

    component.performSearch(term);

    fixture.detectChanges();

    expect(component.term()).toStrictEqual(term);
    expect(termSubjectNextSpy).toHaveBeenCalledWith(term);
  });
});
