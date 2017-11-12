import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../shared.service";

@Component({
  selector: 'clients-validation-information',
  styles: [],
  template: `
    <h5>Short user information</h5>
    <table class="table-gray">
      <tr>
        <td align="center"><i class="fa fa-lg fa-check color-normal"></i></td>
        <td class="table-margin">Number in base</td>
        <td class="table-margin-1 table-bl">Name</td>
        <td><b>Mark</b></td>
      </tr>
      <tr>
        <td align="center"><i class="fa fa-lg fa-check color-normal"></i></td>
        <td class="table-margin">User in base</td>
        <td class="table-margin-1 table-bl">Surname</td>
        <td><b>Klimenko</b></td>
      </tr>
      <tr>
        <td align="center"><i class="fa fa-lg fa-times color-wrong"></i></td>
        <td class="table-margin">VIP user</td>
        <td class="table-margin-1 table-bl">Rides amount</td>
        <td><b>6</b></td>
      </tr>
      <tr>
        <td align="center"><i class="fa fa-lg fa-times color-wrong"></i></td>
        <td class="table-margin">Next ride free</td>
        <td class="table-margin-1 table-bl"></td>
      </tr>
    </table>
  `
})
export class ValidationInformationComponent implements OnInit {

  onMain: any = {};

  constructor(private service: SharedService) {
    service.onMainEvent.subscribe(
      (onMain) => {
        this.onMain = onMain;
        console.log('in information', onMain)
      }
    );
  }

  ngOnInit() {
  }

}
