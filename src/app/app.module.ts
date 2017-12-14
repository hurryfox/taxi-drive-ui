import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TypeaheadModule} from "ngx-bootstrap";

import {AppComponent} from './app.component';
import {HeaderComponent} from './header.component';
import {DashComponent} from './dash/dash.component';
import {SettingsComponent} from './settings/settings.component';
import {HelpComponent} from './help/help.component';
import {CONST_ROUTING} from './app.routing';
import {ClientsDashComponent} from "./dash/clients/clients.component";
import {AdminDashComponent} from "./dash/admin/admin.component";
import {DriversDashComponent} from "./dash/drivers/drivers.component";
import {HomeMenuComponent} from "./dash/menu.component";
import {AngularFontAwesomeModule} from 'angular-font-awesome/angular-font-awesome';
import {RidesPreviousComponent} from "./dash/clients/rides/previous/previous.component";
import {RidesActiveComponent} from "./dash/clients/rides/active/active.component";
import {ValidationNumberComponent} from "./dash/clients/validation/number/number.component";
import {ValidationInformationComponent} from "./dash/clients/validation/information/information.component";
import {RidesAdditionComponent} from "./dash/clients/rides/addition/addition.component";
import {ActiveModalComponent} from "./dash/clients/rides/active/modal.component";
import {SharedService} from "./dash/clients/shared.service";
import {DatePipe} from "@angular/common";
import {GeoCitiesComponent} from "./dash/admin/geo/cities.component";
import {GeoDistrictsComponent} from "./dash/admin/geo/districts.component";
import {GeoStreetsComponent} from "./dash/admin/geo/streets.component";
import {GeoStdComponent} from "./dash/admin/geo/streettodistrict.component";
import {RatesDtdComponent} from "./dash/admin/rates/dtd.component";
import {RatesCtcComponent} from "./dash/admin/rates/ctc.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    DashComponent,

    ClientsDashComponent,
    RidesPreviousComponent,
    RidesActiveComponent,
    ActiveModalComponent,
    RidesAdditionComponent,
    ValidationNumberComponent,
    ValidationInformationComponent,

    DriversDashComponent,

    AdminDashComponent,
    GeoCitiesComponent,
    GeoDistrictsComponent,
    GeoStreetsComponent,
    GeoStdComponent,

    RatesCtcComponent,
    RatesDtdComponent,

    HomeMenuComponent,

    SettingsComponent,

    HelpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    TypeaheadModule.forRoot(),

    CONST_ROUTING
  ],
  providers: [SharedService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
