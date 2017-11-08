import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-menu',
  styles: [],
  template: `
    <ul class="nav flex-column menu">
      <li class="nav-item">
        <a class="nav-link active" href="#" [routerLink]="['/dash/clients']"><i class="fa fa-user-circle fa-border-r"></i>Client management</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" [routerLink]="['/dash/drivers']"><i class="fa fa-car fa-border-r"></i>Driver management</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" [routerLink]="['/dash/admin']"><i class="fa fa-bar-chart fa-border-r"></i>Administrator</a>
      </li>
    </ul>
  `
})
export class HomeMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
