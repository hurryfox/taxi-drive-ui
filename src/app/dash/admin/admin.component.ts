///<reference path="../../../../node_modules/@types/selenium-webdriver/http.d.ts"/>
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NgForm } from "@angular/forms";


declare const keycloak:any;
declare const globalUrl:any;



@Component({
  selector: 'app-dash-admin',
  styleUrls: ['/admin.component.css'],
  templateUrl: '/admin.component.html'

})



export class AdminDashComponent implements OnInit {
  clients: any;
  del: {"clientLogin": "+77"};

  constructor(private http: HttpClient) {
  }


  ngOnInit(): void {
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + keycloak.token);

    this.http.get(globalUrl + '/api/client/all', {headers: headers}).subscribe(data => {
      this.clients = data;
    });

  }

  clicDelete() {
    this.http.delete(globalUrl + '/api/client', this.del).subscribe(
    del => {
    console.log(del);
    },
  err => {
    console.log("Error occured");
    }
    );
  }

  onSubmit(form: NgForm) {


    console.log('OK');
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + keycloak.token);
    let url = globalUrl + '/api/client';

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

