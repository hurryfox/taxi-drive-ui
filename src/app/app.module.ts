import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClientsTableComponent } from './home/clients-table/clients-table.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { CONST_ROUTING } from './app.routing';
import { RidesComponent } from './home/rides/rides.component';
import { StatisticsComponent } from './home/statistics/statistics.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';



@NgModule({
  declarations: [
    AppComponent,
    ClientsTableComponent,
    DashboardComponent,
    RidesComponent,
    StatisticsComponent,
    HomeComponent,
    SettingsComponent,

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
