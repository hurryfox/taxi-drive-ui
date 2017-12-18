import {Component } from '@angular/core';
import { HttpClient } from  "@angular/common/http";


declare const globalUrl:any;

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styles: []
})
export class SettingsComponent{

  clients: any;

  constructor(private http: HttpClient) {
  }


  getClient() {
    this.http.get(globalUrl + '/api/client/all').subscribe(data => {
      this.clients = data;
    });

  }

  clickDel() {

    var delclient = {
      clientId:+75
    };

    this.http.delete('http://localhost:8087/api/client', delclient).subscribe(
      del=> {
        console.log(del);
      });
  }

}

