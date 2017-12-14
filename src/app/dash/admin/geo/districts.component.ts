import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'admin-geo-districts',
  styles: [],
  template: `
    
    <p>Districts table</p>
    
  `
})
export class GeoDistrictsComponent implements OnInit {


  constructor(private http: HttpClient) {
  }

  ngOnInit() {

  }

}


