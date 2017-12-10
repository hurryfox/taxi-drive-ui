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
  constructor(
    private http: HttpClient,

    private messageService: MessageService) { }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }


  ngOnInit(): void {
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + keycloak.token);

    this.http.get(globalUrl + '/api/client/all', {headers: headers}).subscribe(data => {
      this.clients = data;
    });


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

  onEdit(form: NgForm) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let url = globalUrl + '/api/client';

    this.http.delete(url, JSON.stringify(form.value)).subscribe()
  }
}

