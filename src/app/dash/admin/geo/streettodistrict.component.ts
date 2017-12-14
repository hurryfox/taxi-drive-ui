import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'admin-geo-streettodistrict',
  styles: [],
  template: `
    
    <p>Street to district table</p>
    
  `
})
export class GeoStdComponent implements OnInit {


  constructor(private http: HttpClient) {
  }

  ngOnInit() {

  }

}


