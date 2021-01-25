import { Todo } from './../../interfaces/todo';
import { UserService } from './../../services/user.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.page.html',
  styleUrls: ['./resources.page.scss'],
})
export class ResourcesPage implements OnInit {
  public resources: Todo[] = [];
  // public resources$: Observable<Todo[]>;

  constructor(private us: UserService) {}

  ngOnInit() {
    this.us.getTodos().subscribe((list: Todo[]) => {
      this.resources = list;
    });
    // this.resources$ = this.us.getTodos();
  }
}
