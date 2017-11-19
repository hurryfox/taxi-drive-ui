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
          <i *ngIf="numberInBase == 'in_process'" class="fa fa-refresh fa-spin fa-fw color-info"></i>
          <i *ngIf="numberInBase == 'true'" class="fa fa-lg fa-check color-normal"></i>
          <i *ngIf="numberInBase == 'false'" class="fa fa-lg fa-times color-wrong"></i>
        </td>
        <td class="table-margin">Number in base</td>
        <td class="table-margin-1 table-bl">Phone number</td>
        <td><b>{{clientInfo.formClientId}}</b></td>
      </tr>
      <tr>
        <td align="center">
          <i *ngIf="userInBase == 'in_process'" class="fa fa-refresh fa-spin fa-fw color-info"></i>
          <i *ngIf="userInBase == 'true'" class="fa fa-lg fa-check color-normal"></i>
          <i *ngIf="userInBase == 'false'" class="fa fa-lg fa-times color-wrong"></i>
        </td>
        <td class="table-margin">User in base</td>
        <td class="table-margin-1 table-bl">Name</td>
        <td><b>{{clientInfo.clientData.firstName}}</b></td>
      </tr>
      <tr>
        <td align="center">
          <i *ngIf="vipUser == 'in_process'" class="fa fa-refresh fa-spin fa-fw color-info"></i>
          <i *ngIf="vipUser == 'true'" class="fa fa-lg fa-check color-normal"></i>
          <i *ngIf="vipUser == 'false'" class="fa fa-lg fa-times color-wrong"></i>
        </td>
        <td class="table-margin">VIP user</td>
        <td class="table-margin-1 table-bl">Surname</td>
        <td><b>{{clientInfo.clientData.lastName}}</b></td>
      </tr>
      <tr>
        <td align="center">
          <i *ngIf="nextRideFree == 'in_process'" class="fa fa-refresh fa-spin fa-fw color-info"></i>
          <i *ngIf="nextRideFree == 'true'" class="fa fa-lg fa-check color-normal"></i>
          <i *ngIf="nextRideFree == 'false'" class="fa fa-lg fa-times color-wrong"></i>
        </td>
        <td class="table-margin">Next ride free</td>
        <td class="table-margin-1 table-bl">Rides amount</td>
        <td><b>{{clientInfo.clientData.ridesAmount}}</b></td>
      </tr>
    </table>
  `
})
export class ValidationInformationComponent implements OnInit {
  clientInfo: any = {clientData:{}};

  numberInBase: string = 'false';
  userInBase: string = 'false';
  vipUser: string = 'false';
  nextRideFree: string = 'false';

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

    if(!data.inProcess) {
        if(data.clientData.clientLogin) { this.numberInBase = 'true' }
        else { this.numberInBase = 'false' }

        if(data.clientData.firstName) { this.userInBase = 'true' }
        else { this.userInBase = 'false' }

        if(data.clientData.clientType == 'vip') { this.vipUser = 'true' }
        else { this.vipUser = 'false' }

        if(data.clientData.nextRideFree == (data.clientData.ridesAmount + 1) as String) { this.nextRideFree = 'true' }
        else { this.nextRideFree = 'false' }
    } else {
        this.numberInBase = 'in_process';
        this.userInBase = 'in_process';
        this.vipUser = 'in_process';
        this.nextRideFree = 'in_process';
    }
  }
}
