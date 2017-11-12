import { Component, OnInit } from '@angular/core';
import {SharedService} from "./dash/clients/shared.service";

@Component({
  selector: 'app-header',
  styles: [],
  template: `
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">TDA</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#" [routerLink]="['/dash']" >Dashboard<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" [routerLink]="['/settings']" >Settings</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" [routerLink]="['/help']" >Help</a>
          </li>
        </ul>

        <form class="form-inline my-2 my-lg-0">
          <div *ngIf="alertType == 'error'" class="mr-4 color-wrong" role="alert">
            <i class="fa fa-lg fa-exclamation-triangle color-wrong"></i>
              {{alertMessage}}
          </div>

          <div *ngIf="alertType == 'ok'" class="mr-4 color-normal" role="alert">
            <i class="fa fa-lg fa-check color-normal"></i>
            {{alertMessage}}
          </div>
          
          <div class="btn-group">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">m.klimenko</button>
            <div class="dropdown-menu dropdown-menu-right">
              <button class="dropdown-item" type="button" href="#">Logout</button>
            </div>
          </div>
        </form>
      </div>
    </nav>
  `
})
export class HeaderComponent implements OnInit {

  alertType: string = 'none';
  alertMessage: string = '';

  constructor(private service: SharedService) {
    service.onAlertEvent.subscribe(
      (data) => {
        this.alertType = data.alertType;
        this.alertMessage = data.alertMessage;

        setTimeout(() => { this.alertType = 'none'; }, 3000);
      }
    );
  }

  ngOnInit() {
  }
}
