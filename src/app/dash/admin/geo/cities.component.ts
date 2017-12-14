import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'admin-geo-cities',
  styles: [],
  template: `
    
    <p>Cities table</p>
    
  `
})
export class GeoCitiesComponent implements OnInit {


  constructor(private http: HttpClient) {
  }

  ngOnInit() {

  }

}


