import { Injectable } from '@angular/core';
import { areas } from '../areas.mock';
import { Observable, of } from 'rxjs';
import { Area } from '../models/area';

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  constructor() { }

  getAreas(): Observable<Area[]> {
    return of(areas);
  }
}
