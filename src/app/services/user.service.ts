import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getClients(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getTodos(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
