import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dash',
  styles: [],
  template: `

    <div class="container-fluid" >
      <div class="row ml-0 mt-2">
        <div class="col col-md-2">
          <app-dash-menu></app-dash-menu>
        </div>
        <div class="col col-md-10">
          <router-outlet></router-outlet>
        </div>
        
      </div>
    </div>
  `
})
export class DashComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}


