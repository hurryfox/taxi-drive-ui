import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'rides-active-modal',
  styles: [],
  template: `
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
export class ActiveModalComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}


