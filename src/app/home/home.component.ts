import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  styles: [],
  template:`

    <div class="container-fluid">
      <div class="row"><h1></h1></div>
      <div class="row">

        <div class="col col-md-2">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active" href="#">Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Clients</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Rides</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Statistic</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
  `
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
