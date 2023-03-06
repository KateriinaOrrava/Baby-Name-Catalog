import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenderNeutralNames, Name, ResponseName } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class NamesService {


  constructor(private http: HttpClient) {}
  getNames(gender: string) {
    return this.http.get<ResponseName[]>(
      `http://localhost:3004/names/${gender}`
    );
  }

  addName(newNameItem: Name) {
    console.log('service has', newNameItem);
    return this.http.post<Name>('http://localhost:3004/addName', newNameItem);
  }

  deleteName(name: string) {
    console.log('server got an element: ', name);
    return this.http.delete<Name>(`http://localhost:3004/nameToDelete/${name}`);
  }

  //gender neutral names

  getNeutralNameData() {
    return this.http.get<GenderNeutralNames[]>(
      `http://localhost:3004/genderNeutralNames`
    );
  }

  addNeutralNameData(newNameItem: GenderNeutralNames) {
    console.log('service has', newNameItem);
    return this.http.post<GenderNeutralNames>(
      'http://localhost:3004/genderNeutralNames/addName',
      newNameItem
    );
  }

  deleteNeutralNameData(name: string) {
    console.log('server got an element: ', name);
    return this.http.delete(
      `http://localhost:3004/genderNeutralNamesToDelete/${name}`
    );
  }
}
