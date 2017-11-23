import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../shared.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'clients-rides-addition',
  styles: [],
  template: `
    <div class="row mt-2">
      <div class="col col-md-12 block">
        <h5>Ride form</h5>
      </div>
    </div>

    <form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
      <div class="row">
        <div class="col col-md-6 block">

          <h6>From</h6>

          <div class="form-group">
            <input type="text" class="form-control" placeholder="State" name="fromState" ngModel>
          </div>

          <div class="form-group">
            <input type="text" class="form-control" placeholder="City" name="fromCity" ngModel>
          </div>

          <div class="form-group">
            <input type="text" class="form-control" placeholder="Street" name="fromStreet" ngModel>
          </div>

          <div class="form-group">
            <input type="text" class="form-control" placeholder="Building" name="fromBuilding" ngModel>
          </div>
        </div>

        <div class="col col-md-6 block">
          <h6>To</h6>

          <div class="form-group">
            <input type="text" class="form-control" placeholder="State" name="toState" ngModel>
          </div>

          <div class="form-group">
            <input type="text" class="form-control" placeholder="City" name="toCity" ngModel>
          </div>

          <div class="form-group">
            <input type="text" class="form-control" placeholder="Street" name="toStreet" ngModel>
          </div>

          <div class="form-group">
            <input type="text" class="form-control" placeholder="Building" name="toBuilding" ngModel>
          </div>

        </div>
      </div>

      <div class="row">
        <div class="col col-md-12 block text-center">
          <button type="button" class="btn btn-link" data-toggle="collapse" data-target="#extra-panel"><i
            class="fa fa-unsorted fa-lg"></i><span class="caret"></span></button>
        </div>
      </div>

      <div class="collapse" id="extra-panel">
        <div class="row">

          <div class="col col-md-6 block">
            <div class="form-group">
              <input type="datetime-local" class="form-control" name="rideIn" ngModel>
              <small id="emailHelp" class="form-text text-muted">Ride time</small>
            </div>

            <div class="form-group">
              <input type="number" class="form-control" placeholder="Adult in car" name="adultInCar" ngModel>
            </div>

            <div class="form-group">
              <input type="text" class="form-control" placeholder="Dist from" name="distFrom" ngModel>
            </div>
          </div>

          <div class="col col-md-6 block">
            <div class="form-group">
              <select class="form-control" name="prepaid" ngModel>
                <option>N</option>
                <option>Y</option>
              </select>
              <small id="emailHelp" class="form-text text-muted">Prepaid</small>
            </div>

            <div class="form-group">
              <input type="number" class="form-control" placeholder="Children in car" name="childrenInCar" ngModel>
            </div>

            <div class="form-group">
              <input type="text" class="form-control" placeholder="Dist to" name="distTo" ngModel>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col col-md-12 block">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Comment" name="comment" ngModel>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col col-md-6 block">
          <div *ngIf="priceEvaluationData.price">Ride price: <b>{{priceEvaluationData.price}}</b></div>
        </div>
        <div class="col col-md-6 block">
          <div class="form-group float-right">
            <button type="button" class="btn btn-primary mr-2 btn-fix-size" (click)="onPrice(f.value)">Price</button>
            <button type="submit" class="btn btn-primary btn-fix-size">Submit</button>
          </div>
        </div>
      </div>
    </form>
  `
})

export class RidesAdditionComponent implements OnInit {
  clientInfo: any = {};
  priceEvaluationData: any = {};

  constructor(private service: SharedService, private http: HttpClient,) {
    service.onClientEvent.subscribe(
      (data) => {
        this.clientInfo = data;
      }
    );
    service.priceEvaluationData.subscribe(
      (data) => {
        this.priceEvaluationData = data;
      }
    );
  }

  ngOnInit() {

  }

  onPrice(form: any): void {
    if (!this.clientInfo.formClientId) {
      this.service.onAlertEvent.emit({alertType: 'error', alertMessage: 'Enter phone number'});
    } else {
      var ride: any = {
        clientLogin: this.clientInfo.formClientId,
        fromAddress: {
          state: form.fromState,
          city: form.fromCity,
          street: form.fromStreet,
          building: form.fromBuilding
        },
        toAddress: {
          state: form.toState,
          city: form.toCity,
          street: form.toStreet,
          building: form.toBuilding
        },
        distFrom: form.distFrom,
        distTo: form.distTo
      };

      this.http.post('http://localhost:8087/api/ride/evaluate', ride)
        .subscribe(data => {
          this.service.priceEvaluationData.emit(data);
        });
    }
  }

  onSubmit(form: any): void {
    if (!this.clientInfo.formClientId) {
      this.service.onAlertEvent.emit({alertType: 'error', alertMessage: 'Enter phone number'});
    } else {
      var ride: any = {
        clientLogin: this.clientInfo.formClientId,
        fromAddress: {
          state: form.fromState,
          city: form.fromCity,
          street: form.fromStreet,
          building: form.fromBuilding
        },
        toAddress: {
          state: form.toState,
          city: form.toCity,
          street: form.toStreet,
          building: form.toBuilding
        },
        distFrom: form.distFrom,
        distTo: form.distTo,

        adultInCar: form.adultInCar,
        childrenInCar: form.childrenInCar,
        rideIn: form.rideIn,
        prepaid: form.prepaid,
        comment: form.comment
      };

      this.http.post('http://localhost:8087/api/ride/new', ride)
        .subscribe(data => {

        });
    }
  }
}


