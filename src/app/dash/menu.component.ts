import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dash-menu',
  styles: [],
  template: `
    <ul class="nav flex-column menu">
      <li class="nav-item">
        <a class="nav-link active" href="#" [routerLink]="['/dash/clients']"><i
          class="fa fa-user-circle fa-border-r"></i>Client management</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" [routerLink]="['/dash/drivers']"><i class="fa fa-car fa-border-r"></i>Driver
          management</a>
      </li>
      <li class="nav-item">
        <a class="nav-link anchor-button" (click)="onAdminClick()"><i class="fa fa-bar-chart fa-border-r"></i>Administrator</a>
      </li>

      <div *ngIf=adminOpen>
        <li class="nav-item ml-5">
          <a class="nav-link anchor-button" (click)="onGeoClick()"><i class="fa fa-globe fa-border-r"></i>Geo</a>
        </li>
        <div *ngIf=geoOpen>
          <li class="nav-item ml-10">
            <a class="nav-link " href="#" [routerLink]="['/dash/admin/geo/cities']">Cities</a>
          </li>
          <li class="nav-item ml-10">
            <a class="nav-link" href="#" [routerLink]="['/dash/admin/geo/streets']">Streets</a>
          </li>
          <li class="nav-item ml-10">
            <a class="nav-link" href="#" [routerLink]="['/dash/admin/geo/districts']">Districts</a>
          </li>
          <li class="nav-item ml-10">
            <a class="nav-link" href="#" [routerLink]="['/dash/admin/geo/std']">Street to district</a>
          </li>
        </div>

        <li class="nav-item ml-5">
          <a class="nav-link anchor-button" (click)="onRatesClick()"><i class="fa fa-money fa-border-r"></i>Rates</a>
        </li>
        <div *ngIf=ratesOpen>
          <li class="nav-item ml-10">
            <a class="nav-link " href="#" [routerLink]="['/dash/admin/rates/ctc']">City to city</a>
          </li>
          <li class="nav-item ml-10">
            <a class="nav-link" href="#" [routerLink]="['/dash/admin/rates/dtd']">District to district</a>
          </li>
        </div>
        

      </div>
    </ul>
  `
})
export class HomeMenuComponent implements OnInit {

  adminOpen: Boolean = false;
  geoOpen: Boolean = false;
  ratesOpen: Boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  onAdminClick() {
    this.adminOpen = !this.adminOpen
  }

  onGeoClick() {
    this.geoOpen = !this.geoOpen
  }

  onRatesClick() {
    this.ratesOpen = !this.ratesOpen
  }

}
