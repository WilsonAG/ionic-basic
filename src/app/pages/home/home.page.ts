import { ListItem } from './../../interfaces/list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public list: ListItem[] = [
    { name: 'Alerts', redirectTo: '/alerts', icon: 'alert' },
    { name: 'Action-Sheet', redirectTo: '/action-sheet', icon: 'menu' },
    { name: 'cards', redirectTo: '/cards', icon: 'card' },
    { name: 'clients', redirectTo: '/clients', icon: 'person' },
    { name: 'resources', redirectTo: '/resources', icon: 'build' },
    { name: 'api', redirectTo: '/api', icon: 'planet' },
  ];

  constructor() {}

  ngOnInit() {}
}
