import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dash-clients',
  styles: [],
  template: `

    <div class="container-fluid">

      <div class="row mt-2">
        <div class="col col-md-12">
          <form>

            <h3>Phone number</h3>

            <div class="row">
              <div class="col col-md-1">
                <div class="form-group">
                  <select class="form-control" id="exampleSelect1">
                    <option>+7</option>
                    <option>local</option>
                  </select>
                </div>
              </div>

              <div class="col col-md-4">
                <div class="form-group">
                  <input type="tel" class="form-control" id="exampleInputEmail1" placeholder="Client phone number">
                </div>
              </div>

              <div class="col col-md-2">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </div>

          </form>
        </div>
      </div>

      <div class="row mt-2">
        <div class="col col-md-3">
          <form>

            <h3>User board</h3>

            <div class="form-group">
              <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Client name">
            </div>

            <div class="form-group">
              <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Client surname">
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>

          </form>
        </div>

        <div class="col col-md-8 ml-3">
          <h3>Short user information</h3>
        </div>

      </div>

      <div class="row mt-3">
        <div class="col col-md-12">
          <h3>Ride board</h3>
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


