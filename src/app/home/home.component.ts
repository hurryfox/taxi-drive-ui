import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  styles: [],
  template: `

    <div class="container-fluid">
      <div class="row"><h1></h1></div>
      <div class="row">

        <div class="col col-md-2">
          <app-home-menu></app-home-menu>
        </div>

        <div class="col col-md-10">
          <router-outlet></router-outlet>
        </div>
        
      </div>
    </div>
  `
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}


