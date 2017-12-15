import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'admin-geo-districts',
  styles: [],
  template: `
    <div class="row">
      <h2 class="ml-3">Districts geo table</h2>
    </div>
    <div class="row">
      <div class="col col-md-12">
        <table class="table table-sm table-hover table-gray">
          <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Name</th>
          </tr>
          </thead>
          <tbody *ngFor="let district of districts">
          <tr data-toggle="modal" data-target="#orderModal">
            <th>'Id'</th>
            <th>{{district.id}}</th>
            <td>{{district.name}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class GeoDistrictsComponent implements OnInit {

  districts: any = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://localhost:8087/api/geo/district/all').subscribe(data => {
      this.districts = data;
    });
  }
}


