import {Component} from '@angular/core';

declare const keycloak:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  logout() {
    keycloak.logout();
  }

  getUsername() {
    return keycloak.idTokenParsed.preferred_username
  }
}







