import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IItem } from 'app/interfaces';
import { environment } from 'environment';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private http: HttpClient) {}

  getItems() {
    return this.http.get<IItem[]>(environment.BASE_API);
  }
}
