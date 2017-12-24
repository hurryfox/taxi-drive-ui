import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SharedService} from "../../clients/shared.service";

@Component({
  selector: 'admin-rates-ctc',
  styles: [],
  template: `
    <div class="row">
      <div class="col-md-6">
        <h2 class="ml-3">Rates city to city</h2>
      </div>
      <div class="col-md-6 text-right">

        <i class="fa fa-refresh fa-lg anchor-button" (click)="refreshTable()"></i>
        <i class="fa fa-upload fa-lg anchor-button ml-3" data-toggle="modal" data-target="#uploadRates"></i>
        <i class="fa fa-plus fa-lg anchor-button ml-3 mr-3" data-toggle="modal" data-target="#addRate"></i>
        
      </div>
    </div>
    <div class="row">
      <div class="col col-md-12">
        <table class="table table-sm table-hover table-gray">
          <thead>
          <tr>
            <th>#</th>
            <th>From</th>
            <th>To</th>
            <th>Price</th>
            <th></th>
          </tr>
          </thead>
          <tbody *ngFor="let rate of rates let i = index">
          <tr>
            <th>{{i + 1}}</th>
            <td>{{rate.cityFromName}}</td>
            <td>{{rate.cityToName}}</td>
            <td>{{rate.price}}</td>
            <td align="center">
              <i *ngIf="!rate.deleted" class="fa fa-pencil anchor-button" data-toggle="modal" data-target="#editRate" (click)="onStartToEdit(rate)"></i>
              <i *ngIf="!rate.deleted" class="fa fa-trash-o anchor-button ml-3" (click)="onDeleteClick(rate.id)"></i>
              <i *ngIf="rate.deleted" class="fa fa-times"></i>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div id="addRate" class="modal fade" data-keyboard="false" role="dialog" tabindex="-1"
         aria-hidden="true">
      <div class="modal-dialog modal-lg">

        <div class="modal-content">

          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">
              Add Rate City to City
            </h4>
          </div>

          <form #f="ngForm">
            <div class="modal-body">
              <div class="form-group">
                <label class="col-sm-2 control-label" for="inputLogin">Street id</label>
                <input class="form-control" name="id" autocomplete="off" ngModel>
              </div>

              <div class="form-group">
                <label class="col-sm-2 control-label" for="inputFirstName">Street name</label>
                <input class="form-control" name="name" autocomplete="off" ngModel>
              </div>

              <div class="form-group">
                <label class="col-sm-2 control-label" for="inputFirstName">City</label>
                <input [ngModel]="defaultCityName" [typeahead]="cityNames" class="form-control" name="cityName"
                       autocomplete="off" ngModel>
              </div>
            </div>

            <div class="form-group modal-footer">
              <div *ngIf="alertMessage.type == 'load'" class="mr-4 color-info mr-auto" role="alert">
                <i class="fa fa-lg fa-refresh fa-spin color-info"></i>
              </div>
              <div *ngIf="alertMessage.type == 'success'" class="mr-4 color-normal mr-auto" role="alert">
                <i class="fa fa-lg fa-check color-normal"></i>
                {{alertMessage.message}}
              </div>
              <div *ngIf="alertMessage.type == 'error'" class="mr-4 color-wrong mr-auto" role="alert">
                <i class="fa fa-lg fa-exclamation-triangle color-wrong"></i>
                {{alertMessage.message}}
              </div>

              <button type="button" class="btn btn-default" data-dismiss="modal" (click)="onClose(f)" id="reset">
                Close
              </button>
              <button type="button" class="btn btn-primary" (click)="onAddSubmit(f)" id="save">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div id="uploadRates" class="modal fade" data-keyboard="false" role="dialog" tabindex="-1"
         aria-hidden="true">
      <div class="modal-dialog modal-lg">

        <div class="modal-content">

          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">
              Upload Rats City to City
            </h4>
          </div>
          
        </div>
      </div>
    </div>

    <div id="editRate" class="modal fade" data-keyboard="false" role="dialog" tabindex="-1"
         aria-hidden="true">
      <div class="modal-dialog modal-lg">

        <div class="modal-content">

          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">
              Edit Rate City to City
            </h4>
          </div>

          <form #f="ngForm">
            <div class="modal-body disabled">
              <div class="form-group">
                <label class="col-sm-2 control-label" for="inputLogin">From</label>
                <input class="form-control" name="from" autocomplete="off" placeholder={{editableRate.cityFromName}} disabled>
              </div>

              <div class="form-group disabled">
                <label class="col-sm-2 control-label" for="inputFirstName">To</label>
                <input class="form-control" name="to" autocomplete="off" placeholder={{editableRate.cityToName}} disabled>
              </div>
              
              <div class="form-group">
                <label class="col-sm-2 control-label" for="inputFirstName">Price</label>
                <input class="form-control" name="price" placeholder={{editableRate.price}}
                       autocomplete="off" ngModel>
              </div>
            </div>

            <div class="form-group modal-footer">
              <div *ngIf="alertMessage.type == 'load'" class="mr-4 color-info mr-auto" role="alert">
                <i class="fa fa-lg fa-refresh fa-spin color-info"></i>
              </div>
              <div *ngIf="alertMessage.type == 'success'" class="mr-4 color-normal mr-auto" role="alert">
                <i class="fa fa-lg fa-check color-normal"></i>
                {{alertMessage.message}}
              </div>
              <div *ngIf="alertMessage.type == 'error'" class="mr-4 color-wrong mr-auto" role="alert">
                <i class="fa fa-lg fa-exclamation-triangle color-wrong"></i>
                {{alertMessage.message}}
              </div>

              <button type="button" class="btn btn-default" data-dismiss="modal" (click)="onClose(f)" id="reset">
                Close
              </button>
              <button type="button" class="btn btn-primary" (click)="onSubmit(f)" id="save">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `
})
export class RatesCtcComponent implements OnInit {

  rates: any = [];
  cities: any = [];
  cityNames: any = [];
  alertMessage: any = {type: '', message: ''};
  editableRate: any = {}

  constructor(private http: HttpClient, private service: SharedService) {
  }

  ngOnInit() {
    this.refreshTable()
  }

  refreshTable(): void {
    this.http.get('http://localhost:8087/api/rate/ctc/all')
      .subscribe((data: any) => {
        this.rates = data;
        this.cities = JSON.parse(localStorage.getItem('geoData')).cities;

        this.rates.forEach(rate => {
          rate.cityFromName = this.cities.find(city => rate.cityFrom == city.id).name;
          rate.cityToName = this.cities.find(city => rate.cityTo == city.id).name
        });

        this.cityNames = this.cities.map(a => a.name);
      });
  }

  onDeleteClick(rateId: any): void {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let url = 'http://localhost:8087/api/rate/ctc';

    this.http.request('DELETE', url, {headers: headers, body: {id: rateId}}).subscribe(
      res => {
        this.rates.find(rate => rate.id == rateId).deleted = true;
      },
      err => {
        this.service.onAlertEvent.emit({alertType: 'error', alertMessage: 'Can`t delete target rate'});
      }
    );
  }

  onAddSubmit(form: any): void {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let url = 'http://localhost:8087/api/geo/street';

    form.value.city = this.cities.find(city => city.name == form.value.cityName).id;

    this.alertMessage = {type: 'load', message: 'Success'};

    this.http.put(url, form.value, {headers: headers}).subscribe(
      res => {
        this.alertMessage = {type: 'success', message: 'Success'};
      },
      err => {
        this.alertMessage = {type: 'error', message: 'Error'};
      }
    );
  }

  onStartToEdit(rate: any): void {
    this.editableRate = rate;
  }

  onClose(form: any): void {
    this.alertMessage = {type: '', message: ''};
    form.reset();
  }

}


