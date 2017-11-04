import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dash-clients',
  styles: [],
  template: `

    <div class="container-fluid">

      <div class="row ">
        <div class="col col-md-4 block">
          <form>

            <h5>Phone number</h5>

            <div class="row">
              <div class="col col-md-3">
                <div class="form-group">
                  <select class="form-control" id="exampleSelect1">
                    <option>+7</option>
                    <option>local</option>
                  </select>
                </div>
              </div>

              <div class="col col-md-7">
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

      <div class="row mt-2 ">
        <div class="col col-md-4 block">
          <form>

            <h5>User board</h5>

            <div class="form-group">
              <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Client name">
            </div>

            <div class="form-group">
              <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Client surname">
            </div>

            <div class="form-group float-right">
              <button type="submit" class="btn btn-primary mr-2 btn-fix-size">Reject</button>
              <button type="submit" class="btn btn-primary btn-fix-size">Submit</button>
            </div>
          </form>
        </div>

        <div class="col ml-2 block">
          <h5>Short user information</h5>

          <div class="row">
            <div class="col col-md-6">
              <div class="alert alert-danger" role="alert">
                User phone number in DB, but name and surname not provided
              </div>

              <div class="alert alert-success" role="alert">
                The next ride is free, total rides amount <b>9</b>
              </div>

            </div>
            <div class="col col-md-6">
              <div class="alert alert-info" role="alert">
                Maybe here should be placed table with last successful rides
              </div>
            </div>

          </div>

        </div>

      </div>

      <div class="mt-2">
        <div class="row mt-2">
          <div class="col col-md-4 block">
            <h5>Ride form</h5>
          </div>
        </div>

        <div class="row">
          <div class="col col-md-2 block">
            <form>
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

            </form>
          </div>

          <div class="col col-md-2 block">
            <form>
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

              <div class="form-group float-right">
                  <button type="submit" class="btn btn-primary mr-2 btn-fix-size">Price</button>
                  <button type="submit" class="btn btn-primary btn-fix-size">Submit</button>
              </div>
              
            </form>
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


