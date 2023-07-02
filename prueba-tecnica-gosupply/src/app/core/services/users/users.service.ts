import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly http: HttpClient) { }

  getUsersData() {
    return this.http.get('https://646b8fc77d3c1cae4ce3ffe0.mockapi.io/commonapi/users').pipe(map((res: any) => res));
  }

  getUsers() {
    return this.http.get('https://6390b47b65ff4183111c4b91.mockapi.io/users/users').pipe(map((res: any) => res));
  }
}
