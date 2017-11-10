import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'clients-validation-addition',
  styles: [],
  template: `
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
  `
})
export class ValidationAdditionComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}


