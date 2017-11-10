import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'clients-rides-active',
  styles: [],
  template: `
    <div class="row">
      <div class="col col-md-auto">
        <h5>Active rides</h5>
      </div>
    </div>

    <div class="row">
      <div class="col col-md-12">
        <table class="table table-sm table-hover table-gray">
          <thead>
          <tr>
            <th>#</th>
            <th>Date in</th>
            <th>From</th>
            <th>To</th>
            <th>Status</th>
          </tr>
          </thead>
          <tbody *ngFor="let ride of rides">
          <tr data-toggle="modal" data-target="#orderModal">
            <th>{{ride.id}}</th>
            <td>{{ride.dateIn}}</td>
            <td>{{ride.from}}</td>
            <td>{{ride.to}}</td>
            <td>{{ride.status}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <!--modal components-->
    <rides-active-modal></rides-active-modal>
  `
})
export class RidesActiveComponent implements OnInit {

  rides = [
    {id:12, dateIn:'09-11-2017 12:40', from:'Спасск-Дальний Парковая 29/1', to:'Спасск-Дальний Парковая 29/1', status:'active waitclient'},
    {id:14, dateIn:'09-11-2017 12:40', from:'Спасск-Дальний Парковая 29/1', to:'Спасск-Дальний Парковая 29/1', status:'inactive waitdriver'},
    {id:17, dateIn:'09-11-2017 12:40', from:'Спасск-Дальний Парковая 29/1', to:'Спасск-Дальний Парковая 29/1', status:'active waitclient'},
    {id:24, dateIn:'09-11-2017 12:40', from:'Спасск-Дальний Парковая 29/1', to:'Спасск-Дальний Парковая 29/1', status:'active waitclient'},
    {id:26, dateIn:'09-11-2017 12:40', from:'Спасск-Дальний Парковая 29/1', to:'Спасск-Дальний Парковая 29/1', status:'active waitclient'},
    {id:28, dateIn:'09-11-2017 12:40', from:'Спасск-Дальний Парковая 29/1', to:'Спасск-Дальний Парковая 29/1', status:'active waitclient'},
    {id:12, dateIn:'09-11-2017 12:40', from:'Спасск-Дальний Парковая 29/1', to:'Спасск-Дальний Парковая 29/1', status:'active waitclient'},
    {id:12, dateIn:'09-11-2017 12:40', from:'Спасск-Дальний Парковая 29/1', to:'Спасск-Дальний Парковая 29/1', status:'active waitclient'},
    {id:12, dateIn:'09-11-2017 12:40', from:'Спасск-Дальний Парковая 29/1', to:'Спасск-Дальний Парковая 29/1', status:'active waitclient'},
    {id:12, dateIn:'09-11-2017 12:40', from:'Спасск-Дальний Парковая 29/1', to:'Спасск-Дальний Парковая 29/1', status:'active waitclient'},
    {id:12, dateIn:'09-11-2017 12:40', from:'Спасск-Дальний Парковая 29/1', to:'Спасск-Дальний Парковая 29/1', status:'active waitclient'},
    {id:12, dateIn:'09-11-2017 12:40', from:'Спасск-Дальний Парковая 29/1', to:'Спасск-Дальний Парковая 29/1', status:'active waitclient'},
    {id:12, dateIn:'09-11-2017 12:40', from:'Спасск-Дальний Парковая 29/1', to:'Спасск-Дальний Парковая 29/1', status:'active waitclient'},
    {id:12, dateIn:'09-11-2017 12:40', from:'Спасск-Дальний Парковая 29/1', to:'Спасск-Дальний Парковая 29/1', status:'active waitclient'},
    {id:12, dateIn:'09-11-2017 12:40', from:'Спасск-Дальний Парковая 29/1', to:'Спасск-Дальний Парковая 29/1', status:'active waitclient'},
    {id:12, dateIn:'09-11-2017 12:40', from:'Спасск-Дальний Парковая 29/1', to:'Спасск-Дальний Парковая 29/1', status:'active waitclient'},
    {id:12, dateIn:'09-11-2017 12:40', from:'Спасск-Дальний Парковая 29/1', to:'Спасск-Дальний Парковая 29/1', status:'active waitclient'},
    {id:12, dateIn:'09-11-2017 12:40', from:'Спасск-Дальний Парковая 29/1', to:'Спасск-Дальний Парковая 29/1', status:'active waitclient'},
    {id:12, dateIn:'09-11-2017 12:40', from:'Спасск-Дальний Парковая 29/1', to:'Спасск-Дальний Парковая 29/1', status:'active waitclient'},
    {id:12, dateIn:'09-11-2017 12:40', from:'Спасск-Дальний Парковая 29/1', to:'Спасск-Дальний Парковая 29/1', status:'active waitclient'},

  ];

  constructor() {
  }

  ngOnInit() {
  }

}


