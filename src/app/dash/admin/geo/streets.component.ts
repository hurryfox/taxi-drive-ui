import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'admin-geo-streets',
  styles: [],
  template: `
    
    <p>Streets table</p>
    
  `
})
export class GeoStreetsComponent implements OnInit {


  constructor(private http: HttpClient) {
  }

  ngOnInit() {

  }

}


