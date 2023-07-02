import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-obtener-usuarios',
  templateUrl: './obtener-usuarios.component.html',
  styleUrls: ['./obtener-usuarios.component.css']
})
export class ObtenerUsuariosComponent implements OnInit, OnDestroy {

  userList: any[] = [];
  subscriptions: Subscription[] = []
  constructor(private readonly usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  getUsers() {
    this.subscriptions.push(this.usersService.getUsers().subscribe({
        next: (res: any) => {
          this.userList = res;
        },
        error: (err: any) => {
          console.log(err);
        }
      })
    );
  }
}
