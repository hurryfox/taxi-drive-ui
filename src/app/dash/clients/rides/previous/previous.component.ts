import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'clients-rides-previous',
  styles: [],
  template: `    
    <div class="row ">
      <div class="col col-md-auto">
        <h5>Previous rides information</h5>
      </div>
    </div>

    <div class="row ">
      <div class="col col-md-12">
        <table class="table table-sm table-hover table-gray">
          <thead>
          <tr>
            <th>#</th>
            <th>Ride in</th>
            <th>From</th>
            <th>To</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>07-11-2017</td>
            <td>Спасск-Дальний Парковая 29/1</td>
            <td>Спасск-Дальний Советская 108</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>04-11-2017</td>
            <td>Спасск-Дальний Советская 104</td>
            <td>Владивосток Аэропорт</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>01-11-2017</td>
            <td>Спасск-Дальний Красногвардейская 10</td>
            <td>Спасск-Дальний Борисова 16</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class RidesPreviousComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}


