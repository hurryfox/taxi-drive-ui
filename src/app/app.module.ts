import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { DashComponent } from './dash/dash.component';
import { SettingsComponent } from './settings/settings.component';
import { HelpComponent } from './help/help.component';
import { CONST_ROUTING } from './app.routing';
import {ClientsDashComponent} from "./dash/clients/clients.component";
import {AdminDashComponent} from "./dash/admin/admin.component";
import {DriversDashComponent} from "./dash/drivers/drivers.component";
import {HomeMenuComponent} from "./dash/menu.component";
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import {RidesPreviousComponent} from "./dash/clients/rides/previous/previous.component";
import {RidesActiveComponent} from "./dash/clients/rides/active/active.component";
import {ValidationNumberComponent} from "./dash/clients/validation/number/number.component";
import {ValidationInformationComponent} from "./dash/clients/validation/information/information.component";
import {ValidationAdditionComponent} from "./dash/clients/validation/addition/addition.component";
import {RidesAdditionComponent} from "./dash/clients/rides/addition/addition.component";

@NgModule({
  declarations: [
  AppComponent,
  HeaderComponent,

  DashComponent,

  ClientsDashComponent,
  RidesPreviousComponent,
  RidesActiveComponent,
  RidesAdditionComponent,
  ValidationNumberComponent,
  ValidationInformationComponent,
  ValidationAdditionComponent,

  DriversDashComponent,
  AdminDashComponent,
  HomeMenuComponent,

  SettingsComponent,

  HelpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,

    CONST_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
