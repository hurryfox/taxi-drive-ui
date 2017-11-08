import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  template: `
        <app-header></app-header>
        <router-outlet></router-outlet>
    `
})

export class AppComponent {

}







