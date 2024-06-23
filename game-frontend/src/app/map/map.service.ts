import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { Village } from '../models/village.model';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private apiUrl = 'http://localhost:8080/api/villages'; // URL backendu

  constructor(private http: HttpClient) {}

  getVillages(): Observable<Village[]> {
    // return this.http.get<Village[]>(this.apiUrl);
    // Staticky definovaná data pro testování
    const villages: Village[] = [
      { id: 1, type: 'player', owner: 'Player 1', name: 'Village A', points: 100, position: { x: 1, y: 1 } },
      { id: 2, type: 'barbarian', owner: 'Barbarian', name: 'Barbarian Village', points: 50, position: { x: 2, y: 3 } },
      { id: 3, type: 'player', owner: 'Player 2', name: 'Village B', points: 120, position: { x: 5, y: 6 } },
      { id: 4, type: 'player', owner: 'Player 3', name: 'Village C', points: 200, position: { x: 8, y: 8 } },
      { id: 5, type: 'barbarian', owner: 'Barbarian', name: 'Barbarian Village 2', points: 75, position: { x: 7, y: 2 } }
    ];

    // Vrací Observable se statickými daty
    return of(villages);
  }
}
