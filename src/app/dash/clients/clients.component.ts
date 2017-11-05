import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dash-clients',
  styles: [],
  template: `

    <div class="container-fluid">

      <div>


        <div class="row">
          <div class="col col-md-4 block">
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

          </div>

          <div class="col ml-2 block">
            <h5>Short user information</h5>

            <table>
              <tr>
                <td align="center"><i class="fa fa-lg fa-check color-normal"></i></td>
                <td>normal</td>
              </tr>
              <tr>
                <td align="center"><i class="fa fa-lg fa-info color-info"></i></td>
                <td>info</td>
              </tr>
              <tr>
                <td align="center"><i class="fa fa-lg fa-exclamation color-alert"></i></td>
                <td>alert</td>
              </tr>
              <tr>
                <td align="center"><i class="fa fa-lg fa-times color-wrong"></i></td>
                <td>wrong</td>
              </tr>
            </table>
            
            
           <!-- 
            <div>
              <i class="fa fa-lg fa-check color-normal"></i> normal<br>
            </div>
            <div>
              <i class="fa fa-lg fa-info color-info"></i> info<br>
            </div>
            <div>
              <i class="fa fa-lg fa-exclamation color-alert"></i> alert<br>
            </div>
            <div>
              <i class="fa fa-lg fa-times color-wrong"></i> wrong<br>
            </div>-->


          </div>

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
          <h5>Previous rides information</h5>


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


