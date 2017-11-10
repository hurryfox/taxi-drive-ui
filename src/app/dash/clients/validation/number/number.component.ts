import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'clients-validation-number',
  styles: [],
  template: `
    <div class="row">
      <div class="col col-md-4 block">
        <h5>Phone number</h5>
      </div>
    </div>

    <div class="row">
      <div class="col col-md-3 block">
        <form>
          <div class="form-group">
            <select class="form-control" id="exampleSelect1">
              <option>+7</option>
              <option>local</option>
            </select>
          </div>
        </form>
      </div>

      <div class="col col-md-9 block">
        <form>
          <div class="form-group">
            <input type="tel" class="form-control" id="exampleInputEmail1" placeholder="Client phone number">
          </div>
        </form>
      </div>
    </div>

    <div class="row">
      <div class="col col-md-12 block">
        <form>
          <div class="form-group float-right">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  `
})
export class ValidationNumberComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}


