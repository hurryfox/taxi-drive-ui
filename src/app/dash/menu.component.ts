import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-menu',
  styles: [],
  template: `
    <ul class="nav flex-column menu">
      <li class="nav-item">
        <a class="nav-link active" href="#" [routerLink]="['/dash/clients']">Client management</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" [routerLink]="['/dash/drivers']">Driver management</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" [routerLink]="['/dash/admin']">Administrator</a>
      </li>
    </ul>
  `
})
export class HomeMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
