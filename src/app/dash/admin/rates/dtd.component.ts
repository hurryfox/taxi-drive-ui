import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'admin-rates-dtd',
  styles: [],
  template: `
    
    <p>District to district rate table</p>
    
  `
})
export class RatesDtdComponent implements OnInit {


  constructor(private http: HttpClient) {
  }

  ngOnInit() {

  }
}


