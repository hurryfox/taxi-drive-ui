import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'admin-geo-cities',
  styles: [],
  template: `
    <div class="row">
      <h2 class="ml-3">Cities geo table</h2>
    </div>
    <div class="row">
      <div class="col col-md-12">
        <table class="table table-sm table-hover table-gray">
          <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Name</th>
            <th>State id</th>
            <th>State name</th>
          </tr>
          </thead>
          <tbody *ngFor="let city of cities">
          <tr data-toggle="modal" data-target="#orderModal">
            <th>'Id'</th>
            <th>{{city.id}}</th>
            <td>{{city.name}}</td>
            <td>{{city.state}}</td>
            <td>State name</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class GeoCitiesComponent implements OnInit {

  cities: any = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://localhost:8087/api/geo/city/all').subscribe(data => {
      this.cities = data;
    });
  }

}


