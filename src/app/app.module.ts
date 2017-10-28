import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClientsTableComponent } from './home/administrator/clients-table/clients-table.component';
import { DriversComponent } from './home/administrator/drivers/drivers.component';
import { CONST_ROUTING } from './app.routing';
import { RidesComponent } from './home/administrator/rides/rides.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { ClientManagementComponent } from './home/client-management/client-management.component';
import { DriverManagementComponent } from './home/driver-management/driver-management.component';
import { AdministratorComponent } from './home/administrator/administrator.component';
import { TarifsComponent } from './settings/tarifs/tarifs.component';
import { OtherComponent } from './settings/other/other.component';
import { MenuHomeComponent } from './home/menu-home.component';







@NgModule({
  declarations: [
    AppComponent,
    ClientsTableComponent,
    DriversComponent,
    RidesComponent,
    HomeComponent,
    SettingsComponent,
    ClientManagementComponent,
    DriverManagementComponent,
    AdministratorComponent,
    TarifsComponent,
    OtherComponent,
    MenuHomeComponent,




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
