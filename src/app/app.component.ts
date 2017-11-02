import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  template: `
        <app-header></app-header>
        <router-outlet></router-outlet>

        <nav class="navbar fixed-bottom navbar-light bg-faded">

          <div class="container">
            <p class="pull-left"> Copyright © Footer 2014. All right reserved. </p>
            <div class="pull-right">
              <ul class="nav nav-pills payments">
                <li><i class="fa fa-cc-visa"></i></li>
                <li><i class="fa fa-cc-mastercard"></i></li>
                <li><i class="fa fa-cc-amex"></i></li>
                <li><i class="fa fa-cc-paypal"></i></li>
              </ul>
            </div>
          </div>

        </nav>
    `
})

export class AppComponent {

}







