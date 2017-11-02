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

@NgModule({
  declarations: [
  AppComponent,
  HeaderComponent,

  DashComponent,
  ClientsDashComponent,
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

    CONST_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
