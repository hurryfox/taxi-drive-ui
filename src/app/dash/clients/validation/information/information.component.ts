import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../shared.service";

@Component({
  selector: 'clients-validation-information',
  styles: [],
  template: `
    <h5>Short user information</h5>
    <table class="table-gray">
      <tr>
        <td align="center">
          <i *ngIf="numberInBase == true" class="fa fa-lg fa-check color-normal"></i>
          <i *ngIf="numberInBase == false" class="fa fa-lg fa-times color-wrong"></i>
        </td>
        <td class="table-margin">Number in base</td>
        <td class="table-margin-1 table-bl">Phone number</td>
        <td><b>{{clientInfo.clientLogin}}</b></td>
      </tr>
      <tr>
        <td align="center">
          <i *ngIf="userInBase == true" class="fa fa-lg fa-check color-normal"></i>
          <i *ngIf="userInBase == false" class="fa fa-lg fa-times color-wrong"></i>
        </td>
        <td class="table-margin">User in base</td>
        <td class="table-margin-1 table-bl">Name</td>
        <td><b>{{clientInfo.firstName}}</b></td>
      </tr>
      <tr>
        <td align="center">
          <i *ngIf="vipUser == true" class="fa fa-lg fa-check color-normal"></i>
          <i *ngIf="vipUser == false" class="fa fa-lg fa-times color-wrong"></i>
        </td>
        <td class="table-margin">VIP user</td>
        <td class="table-margin-1 table-bl">Surname</td>
        <td><b>{{clientInfo.lastName}}</b></td>
      </tr>
      <tr>
        <td align="center">
          <i *ngIf="nextRideFree == true" class="fa fa-lg fa-check color-normal"></i>
          <i *ngIf="nextRideFree == false" class="fa fa-lg fa-times color-wrong"></i>
        </td>
        <td class="table-margin">Next ride free</td>
        <td class="table-margin-1 table-bl">Rides amount</td>
        <td><b>{{clientInfo.ridesAmount}}</b></td>
      </tr>
    </table>
  `
})
export class ValidationInformationComponent implements OnInit {
  clientInfo: any = {};

  numberInBase: boolean = false;
  userInBase: boolean = false;
  vipUser: boolean = false;
  nextRideFree: boolean = false;

  constructor(private service: SharedService) {
    service.onClientEvent.subscribe(
      (data) => {
        this.clientInfo = data;
        this.computeLabels(data)
      }
    );
  }

  ngOnInit() {
  }

  computeLabels(data) {
    console.log('in compute labels', data);

    if(data.clientLogin) { this.numberInBase = true }
    else { this.numberInBase = false }

    if(data.firstName) { this.userInBase = true }
    else { this.userInBase = false }

    if(data.clientType == 'vip') { this.vipUser = true }
    else { this.vipUser = false }

    if(data.nextRideFree == (data.ridesAmount + 1) as String) { this.nextRideFree = true }
    else { this.nextRideFree = false }
  }
}
