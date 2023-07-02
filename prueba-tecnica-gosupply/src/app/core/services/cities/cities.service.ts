import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private readonly http: HttpClient) { }

  getCitiesData() {
    return this.http.get('https://646b8fc77d3c1cae4ce3ffe0.mockapi.io/commonapi/cities').pipe(map((res: any) => res));
  }

  getCitiesByUserId(userId: number) {
    return this.http.get(`https://646b8fc77d3c1cae4ce3ffe0.mockapi.io/commonapi/cities?id=${userId}`).pipe(map((res: any) => res));
  }
}
