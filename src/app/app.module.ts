import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { ClientsTableComponent } from './clients-table/clients-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CONST_ROUTING } from './app.routing';
import { RidesComponent } from './rides/rides.component';
import { StatisticsComponent } from './statistics/statistics.component';



@NgModule({
  declarations: [
    AppComponent,
    ClientsTableComponent,
    MenuComponent,
    DashboardComponent,
    RidesComponent,
    StatisticsComponent,

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
