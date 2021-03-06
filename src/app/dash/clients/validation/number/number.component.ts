import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SharedService} from "../../shared.service";

@Component({
  selector: 'clients-validation-number',
  styles: [],
  template: `
    <div class="row">
      <div class="col col-md-4 block">
        <h5>Phone number</h5>
      </div>
    </div>

    <form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
      <div class="row">
        <div class="col col-md-3 block">
          <div class="form-group">
            <select class="form-control" id="clientNumber" name="clientNumType" [(ngModel)]="selectedNumberCode"
                    (change)="onBannerChange()">
              <option *ngFor="let code of numberCodes" [ngValue]="code">{{code.numberCode}}</option>
            </select>
          </div>
        </div>

        <div class="col col-md-9 block">
          <div class="form-group">
            <input type="tel" class="form-control" id="exampleInputEmail1" placeholder="Client phone number"
                   name="clientNumber" ngModel>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col col-md-12 block">
          <div class="form-group float-right">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </form>
  `
})

export class ValidationNumberComponent implements OnInit {

  public numberCodes: any[] = [
    {numberCode: '+7'},
    {numberCode: 'local'}
  ];

  public selectedNumberCode: any = this.numberCodes[0];

  constructor(private http: HttpClient, private service: SharedService) {
  }

  ngOnInit() {
    this.selectedNumberCode = this.numberCodes.find(x =>
      x.numberCode == this.selectedNumberCode.numberCode);
  }

  onBannerChange() {
    console.log(this.selectedNumberCode);
  }

  onSubmit(form: any): void {
    if(form.clientNumber) {
      var formClientId;
      if (form.clientNumType.numberCode == 'local') {
        formClientId = form.clientNumber
      } else {
        formClientId = form.clientNumType.numberCode + form.clientNumber
      }

      this.service.onClientEvent.emit({inProcess: true, clientData: {}, formClientId : null});

      this.http.get('http://localhost:8087/api/client/check/' + formClientId).subscribe(data => {
        this.service.onClientEvent.emit({inProcess: false, clientData: data, formClientId : formClientId});
      });
    } else {
      this.service.onClientEvent.emit({inProcess: false, clientData: {}, formClientId : null});
      this.service.onAlertEvent.emit({alertType: 'error', alertMessage : 'Enter phone number'});
    }
    this.service.priceEvaluationData.emit({});
  }
}


