import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { debounceTime, Subject } from 'rxjs';

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

  term: string = '';

  ngOnInit() {
    this.termSubject
      .pipe(debounceTime(300))
      .subscribe((term) => this.onSearch.emit(term));
  }

  ngOnDestroy() {
    this.termSubject.complete();
  }

  performSearch() {
    this.termSubject.next(this.term);
  }
}
