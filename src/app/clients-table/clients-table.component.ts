import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.css']
})

export class ClientsTableComponent implements OnInit  {
  clients: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:8087/api/person/all').subscribe(data => {
      this.clients = data;
    });
  }

  onSubmit(form: NgForm) {
    console.log('OK');
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let url = 'http://localhost:8087/api/person';

    this.http.put(url, JSON.stringify(form.value), {headers: headers}).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    );
  }
}

