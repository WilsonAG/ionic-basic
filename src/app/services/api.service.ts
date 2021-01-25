import { Observable } from 'rxjs';
import { Contact } from './../interfaces/contact';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'https://ng-login-601e3.firebaseio.com/contacts.json';

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.url);
  }
}
