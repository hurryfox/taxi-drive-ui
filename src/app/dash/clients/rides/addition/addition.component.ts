import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'clients-rides-addition',
  styles: [],
  template: `
    <div class="row mt-2">
      <div class="col col-md-12 block">
        <h5>Ride form</h5>
      </div>
    </div>

    <div class="row">
      <div class="col col-md-6 block">
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

      <div class="col col-md-6 block">
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

        </form>
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
          <form>
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
          </form>
        </div>

        <div class="col col-md-6 block">
          <form>
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
          </form>
        </div>
      </div>

      <div class="row">
        <div class="col col-md-12 block">
          <form>
            <div class="form-group">
              <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Comment">
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col col-md-6 block">
        Ride price: <b>120</b>
      </div>
      <div class="col col-md-6 block">
        <form>
          <div class="form-group float-right">
            <button type="submit" class="btn btn-primary mr-2 btn-fix-size">Price</button>
            <button type="submit" class="btn btn-primary btn-fix-size">Submit</button>
          </div>
        </form>
      </div>
    </div>
  `
})

export class RidesAdditionComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}


