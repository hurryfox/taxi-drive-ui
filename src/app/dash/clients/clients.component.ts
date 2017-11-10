import {Component, OnInit} from '@angular/core';
import {$} from "protractor";

@Component({
  selector: 'app-dash-clients',
  styles: [],
  template: `    
    <div class="container-fluid">
      <div class="row">
        <div class="col col-md-4 block">
          <clients-validation-number></clients-validation-number>
        </div>
        <div class="col ml-2 block">
          <clients-validation-information></clients-validation-information>
        </div>
      </div>

      <div class="row mt-2 ">
        <div class="col col-md-4 block">
          <clients-validation-addition></clients-validation-addition>
        </div>
        <div class="col ml-2 block">
          <clients-rides-previous></clients-rides-previous>
        </div>
      </div>

      <div class="row">
        <div class="col col-md-4">
          <clients-rides-addition></clients-rides-addition>
        </div>
        <div class="col ml-2 mt-2 block">
          <clients-rides-active></clients-rides-active>
        </div>
      </div>
    </div>


    <div id="orderModal" class="modal fade" role="dialog" aria-labelledby="orderModal" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>
            <h3>Order</h3>
          </div>
          <div id="orderDetails" class="modal-body"></div>
          <div id="orderItems" class="modal-body"></div>
          <div class="modal-footer">
            <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
          </div>
        </div>
      </div>
    </div>

  `
})
export class ClientsDashComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
  }
}


