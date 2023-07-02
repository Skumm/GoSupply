import { Component, OnInit } from '@angular/core';
import { UserDetail } from 'src/app/shared/interfaces/user-detail';

@Component({
  selector: 'app-comunicacion-componentes',
  templateUrl: './comunicacion-componentes.component.html',
  styleUrls: ['./comunicacion-componentes.component.css']
})
export class ComunicacionComponentesComponent implements OnInit {
  
  detailView: UserDetail = {
    age: 0,
    name: 'John'
  };

  constructor() { }

  ngOnInit(): void {
  }

  incrementUserAge(): void {
    this.detailView.age++;
    console.log('detailView age', this.detailView.age);
  }

}
