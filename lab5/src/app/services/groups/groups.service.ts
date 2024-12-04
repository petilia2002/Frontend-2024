import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Group } from '../../models/group';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  constructor(private http: HttpClient) {}

  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(`http://localhost:3000/groups`);
  }
}
