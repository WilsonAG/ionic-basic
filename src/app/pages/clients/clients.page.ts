import { Observable } from 'rxjs';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {
  // clients: Array<any> = [];
  public clients: Observable<any>;

  constructor(private us: UserService) {}

  ngOnInit() {
    // this.us.getClients().subscribe((res) => {
    //   this.clients = res;
    //   console.log(this.clients);
    // });
    this.clients = this.us.getClients();
  }
}
