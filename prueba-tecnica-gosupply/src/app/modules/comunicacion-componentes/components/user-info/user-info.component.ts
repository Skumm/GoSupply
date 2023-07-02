import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { UserDetail } from 'src/app/shared/interfaces/user-detail';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnChanges {

  @Input() userData: UserDetail = {} as UserDetail;
  @Output() userAgeChange = new EventEmitter<number>();
  constructor() { }

  /**
   * Cuando se detecta un cambio en las propiedades de entrada, se ejecuta este método
   * Si quisieramos detectar cualquier cambio en el componente (como por ejemplo la pripiedad age de detailView)
   * se puede usar el método ngDoCheck()
   * */
  ngOnChanges() {
    this.userDataChanges();
  }

  private userDataChanges(): void {
    console.log('User data changed');
  }

  incrementUserAge(): void {
    this.userAgeChange.emit();
  }
}
