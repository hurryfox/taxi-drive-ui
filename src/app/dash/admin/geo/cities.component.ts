import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SharedService} from "../../clients/shared.service";

@Component({
  selector: 'admin-geo-cities',
  styles: [],
  template: `
    <div class="row">
      <div class="col-md-6">
        <h2 class="ml-3">Cities</h2>
      </div>
      <div class="col-md-6 text-right">
        <button type="button" class="btn btn-primary btn-fix-size" (click)="refreshTable()">Refresh</button>
        <button type="button" class="btn btn-primary btn-fix-size" data-toggle="modal" data-target="#addCity">Add
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col col-md-12">
        <table class="table table-sm table-hover table-gray">
          <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Name</th>
            <th>State</th>
            <th></th>
          </tr>
          </thead>
          <tbody *ngFor="let city of cities; let i = index">
          <tr data-toggle="modal" data-target="#orderModal">
            <th>{{i + 1}}</th>
            <th>{{city.id}}</th>
            <td>{{city.name}}</td>
            <td>{{city.stateName}}</td>
            <td>
              <i *ngIf="!city.deleted" class="fa fa-trash-o anchor-button" (click)="onDeleteClick(city.id)"></i>
              <i *ngIf="city.deleted" class="fa fa-times"></i>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>


    <div id="addCity" class="modal fade" data-keyboard="false" role="dialog" tabindex="-1"
         aria-hidden="true">
      <div class="modal-dialog modal-lg">

        <div class="modal-content">

          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">
              Add City
            </h4>
          </div>

          <form #f="ngForm">
            <div class="modal-body">
              <div class="form-group">
                <label class="col-sm-2 control-label" for="inputLogin">City id</label>
                <input class="form-control" name="id" autocomplete="off" ngModel>
              </div>

              <div class="form-group">
                <label class="col-sm-2 control-label" for="inputFirstName">City name</label>
                <input class="form-control" name="name" autocomplete="off" ngModel>
              </div>

              <div class="form-group">
                <label class="col-sm-2 control-label" for="inputFirstName">State</label>
                <input [ngModel]="defaultStateName" [typeahead]="stateNames" class="form-control" name="stateName"
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
export class GeoCitiesComponent implements OnInit {

  cities: any = [];
  states: any = [];
  stateNames: any = [];
  defaultStateName: String = 'Приморский край';
  alertMessage: any = {type: '', message: ''};

  constructor(private http: HttpClient, private service: SharedService) {
  }

  ngOnInit() {
    this.refreshTable()
  }

  refreshTable(): void {
    this.http.get('http://localhost:8087/api/geo/all')
      .subscribe((data: any) => {
        localStorage.setItem('geoData', JSON.stringify(data));
        this.cities = data.cities;
        this.states = data.states;

        this.cities.forEach(city => {
          city.stateName = this.states.find(state => city.state == state.id).name
        });

        this.stateNames = this.states.map(a => a.name);
      });
  }

  onSubmit(form: any): void {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let url = 'http://localhost:8087/api/geo/city';

    form.value.state = this.states.find(state => state.name == form.value.stateName).id;

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

  onClose(form: any): void {
    this.alertMessage = {type: '', message: ''};
    form.reset();
  }

  onDeleteClick(cityId: any): void {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let url = 'http://localhost:8087/api/geo/city';

    this.http.request('DELETE', url, {headers: headers, body: {id: cityId}}).subscribe(
      res => {
        this.cities.find(city => city.id == cityId).deleted = true;
      },
      err => {
        this.service.onAlertEvent.emit({alertType: 'error', alertMessage: 'Can`t delete city with id: ' + cityId});
      }
    );
  }
}


