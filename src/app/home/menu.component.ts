import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-menu',
  styles: [],
  template: `
    <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link active" href="#" [routerLink]="['/home/clients']">Client management</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" [routerLink]="['/home/drivers']">Driver management</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" [routerLink]="['/home/admin']">Administrator</a>
      </li>
    </ul>
  `
})
export class HomeMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
