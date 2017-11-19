import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../shared.service";

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
            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="State">
          </div>

          <div class="form-group">
            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="City">
          </div>

          <div class="form-group">
            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Street">
          </div>

          <div class="form-group">
            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Building">
          </div>
        </div>

        <div class="col col-md-6 block">
          <h6>To</h6>

          <div class="form-group">
            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="State">
          </div>

          <div class="form-group">
            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="City">
          </div>

          <div class="form-group">
            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Street">
          </div>

          <div class="form-group">
            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Building">
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
              <input type="datetime-local" class="form-control" id="exampleInputEmail1">
              <small id="emailHelp" class="form-text text-muted">Ride time</small>
            </div>

            <div class="form-group">
              <input type="number" class="form-control" id="exampleInputEmail1" placeholder="Men in car">
            </div>

            <div class="form-group">
              <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Dist from">
            </div>
          </div>

          <div class="col col-md-6 block">
            <div class="form-group">
              <select class="form-control" id="exampleSelect1">
                <option>N</option>
                <option>Y</option>
              </select>
              <small id="emailHelp" class="form-text text-muted">Prepaid</small>
            </div>

            <div class="form-group">
              <input type="number" class="form-control" id="exampleInputEmail1" placeholder="Children in car">
            </div>

            <div class="form-group">
              <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Dist to">
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col col-md-12 block">
            <div class="form-group">
              <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Comment">
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col col-md-6 block">
          Ride price: <b>120</b>
        </div>
        <div class="col col-md-6 block">
          <div class="form-group float-right">
            <button type="price" class="btn btn-primary mr-2 btn-fix-size">Price</button>
            <button type="submit" class="btn btn-primary btn-fix-size">Submit</button>
          </div>
        </div>
      </div>
    </form>
  `
})

export class RidesAdditionComponent implements OnInit {
  clientInfo: any = {};

  constructor(private service: SharedService) {
    service.onClientEvent.subscribe(
      (data) => {
        this.clientInfo = data;
      }
    );
  }

  ngOnInit() {

  }

  onSubmit(form: any): void {
    if(!this.clientInfo.clientLogin) {
      this.service.onAlertEvent.emit({alertType: 'error', alertMessage : 'Enter phone number'});
    }


    console.log('in ride addition', this.clientInfo)
  }
}


