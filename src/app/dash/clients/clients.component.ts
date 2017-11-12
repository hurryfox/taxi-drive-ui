import {Component, OnInit} from '@angular/core';

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

      <div class="row">
        <div class="col col-md-4">
          <clients-rides-addition></clients-rides-addition>
        </div>
        <div class="col ml-2">
          <div class="row mt-2">
            <div class="col block">
              <clients-rides-previous></clients-rides-previous>
            </div>
          </div>

          <div class="row mt-2">
            <div class="col block">
              <clients-rides-active></clients-rides-active>
            </div>
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
