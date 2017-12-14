import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'admin-rates-ctc',
  styles: [],
  template: `
    
    <p>City to city rate table</p>
    
  `
})
export class RatesCtcComponent implements OnInit {


  constructor(private http: HttpClient) {
  }

  ngOnInit() {

  }

}


