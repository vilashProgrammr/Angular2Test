import { Injectable } from '@angular/core';
import { mockMenus } from '../menu.mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMockMenus(): Observable<string[]> {
    return of(mockMenus);
  }
}
