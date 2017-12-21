import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'clients-rides-active',
  styles: [],
  template: `
    <div class="row">
      <div class="col col-md-auto">
        <h5>Active rides</h5>
      </div>
    </div>

    <div class="row">
      <div class="col col-md-12">
        <table class="table table-sm table-hover table-gray">
          <thead>
          <tr>
            <th>#</th>
            <th>Ride in</th>
            <th>From</th>
            <th>To</th>
            <th>Status</th>
          </tr>
          </thead>
          <tbody *ngFor="let ride of rides">
          <tr data-toggle="modal" data-target="#orderModal">
            <th>{{ride.clientLogin}}</th>
            <td>{{ride.rideIn}}</td>
            <td>{{ride.fromAddress.city}} {{ride.fromAddress.street}} {{ride.fromAddress.building}}</td>
            <td>{{ride.toAddress.city}} {{ride.toAddress.street}} {{ride.toAddress.building}}</td>
            <td>{{ride.state}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!--modal components-->
    <rides-active-modal></rides-active-modal>
  `
})
export class RidesActiveComponent implements OnInit {

  rides: any = [];
  activeRidesChecker: any = null;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getActiveRides();
    this.activeRidesChecker = setInterval(() => {
      this.getActiveRides()
    }, 10000);
  }

  getActiveRides() {
    this.http.get('http://localhost:8087/api/ride/active').subscribe(data => {
      this.rides = data;
    });
  }

  ngOnDestroy() {
    if (this.activeRidesChecker) {
      clearInterval(this.activeRidesChecker);
    }
  }
}


