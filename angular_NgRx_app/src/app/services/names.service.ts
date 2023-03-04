import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Name, ResponseName } from '../types/types';
import { Observable } from 'rxjs';

// type NameResponse
@Injectable({
  providedIn: 'root',
})
export class NamesService {
  constructor(private http: HttpClient) {}
  getData(gender: string) {
    return this.http.get<ResponseName[]>(
      `http://localhost:3004/names/${gender}`
    );
  }
  addData(newNameItem: Name) {
    console.log('service has', newNameItem);
    return this.http.post<Name>('http://localhost:3004/addName', newNameItem);
  }
  deleteData(name: string) {
    console.log('server got an element: ', name);
    return this.http.delete<Name>(`http://localhost:3004/nameToDelete/${name}`);
  }
}
