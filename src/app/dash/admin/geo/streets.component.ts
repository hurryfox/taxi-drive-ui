import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'admin-geo-streets',
  styles: [],
  template: `
    <div class="row">
      <h2 class="ml-3">Streets geo table</h2>
    </div>
    <div class="row">
      <div class="col col-md-12">
        <table class="table table-sm table-hover table-gray">
          <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Name</th>
            <th>City id</th>
            <th>City name</th>
          </tr>
          </thead>
          <tbody *ngFor="let street of streets">
          <tr data-toggle="modal" data-target="#orderModal">
            <th>'Id'</th>
            <th>{{street.id}}</th>
            <td>{{street.name}}</td>
            <td>{{street.city}}</td>
            <td>City name</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class GeoStreetsComponent implements OnInit {

  streets: any = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://localhost:8087/api/geo/street/all').subscribe(data => {
      this.streets = data;
    });
  }
}


