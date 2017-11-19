import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../shared.service";

@Component({
  selector: 'clients-rides-previous',
  styles: [],
  template: `    
    <div class="row ">
      <div class="col col-md-auto">
        <h5>Previous rides information</h5>
      </div>
    </div>

    <div class="row ">
      <div class="col col-md-12">
        <table class="table table-sm table-hover table-gray">
          <thead>
          <tr>
            <th>Date in</th>
            <th>From</th>
            <th>To</th>
          </tr>
          </thead>
          <tbody *ngFor="let ride of previousRides">
          <tr>
            <td>{{ride.dateIn}}</td>
            <td>{{ride.fromAddress.state}} {{ride.fromAddress.city}} {{ride.fromAddress.street}} {{ride.fromAddress.building}}</td>
            <td>{{ride.toAddress.state}} {{ride.toAddress.city}} {{ride.toAddress.street}} {{ride.toAddress.building}}</td>
          </tr>
          </tbody>
        </table>
        <p *ngIf="previousRides == undefined || previousRides.length == 0" align="center">No information about previous rides</p>
      </div>
    </div>
    
  `
})
export class RidesPreviousComponent implements OnInit {

  previousRides: any = [];

  constructor(private service: SharedService) {
    service.onClientEvent.subscribe(
      (data) => {
        this.previousRides = data.clientData.previousRides;
        console.log('previousRides', data.clientData.previousRides)
      }
    );
  }

  ngOnInit() {
    console.log(this.previousRides)
  }
}


