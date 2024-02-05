import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  @Output() onSearch: EventEmitter<string> = new EventEmitter();

  private termSubject = new Subject<string>();

  term = signal('');

  ngOnInit() {
    this.termSubject
      .pipe(distinctUntilChanged(), debounceTime(300))
      .subscribe((term) => this.onSearch.emit(term));
  }

  ngOnDestroy() {
    this.termSubject.complete();
  }

  performSearch(value: string) {
    this.term.set(value);
    this.termSubject.next(value);
  }
}
