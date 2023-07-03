import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { CitiesService } from 'src/app/core/services/cities/cities.service';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-consultas-api',
  templateUrl: './consultas-api.component.html',
  styleUrls: ['./consultas-api.component.css']
})
export class ConsultasApiComponent implements OnInit {

  constructor(
    private readonly usersService: UsersService,
    private readonly citiesService: CitiesService,
  ) { }

  ngOnInit(): void {
    this.getSimultaneusData();
    this.getCitiesByUserId();
  }

  getSimultaneusData() {
    forkJoin([this.usersService.getUsersData(), this.citiesService.getCitiesData()]).subscribe({
      next: (res) => {
        console.log('response', res);
      }
    })
  }

  getCitiesByUserId() {
    this.usersService.getUsersData().subscribe({
      next: (res) => {
        this.citiesService.getCitiesByUserId(res[0].id).subscribe({
          next: (res) => {
            console.log('citieById', res);
          }
        })
      }
    })

  }
}
