import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { HelpComponent } from './help/help.component';
import { CONST_ROUTING } from './app.routing';
import {ClientsDashComponent} from "./home/clients/clients.component";
import {AdminDashComponent} from "./home/admin/admin.component";
import {DriversDashComponent} from "./home/drivers/drivers.component";
import {HomeMenuComponent} from "./home/menu.component";

@NgModule({
  declarations: [
  AppComponent,
  HeaderComponent,

  HomeComponent,
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
