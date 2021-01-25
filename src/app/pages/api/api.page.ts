import { Contact } from './../../interfaces/contact';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {
  public contacts: Contact[] = [];

  constructor(private apiSv: ApiService) {}

  ngOnInit() {
    this.apiSv.getContacts().subscribe((res) => {
      this.contacts = res;
    });
  }
}
