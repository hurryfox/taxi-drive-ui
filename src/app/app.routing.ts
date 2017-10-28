import { Routes, RouterModule } from '@angular/router';
import { ClientsTableComponent } from "./home/administrator/clients-table/clients-table.component";

import { RidesComponent} from "./home/administrator/rides/rides.component";
import {HomeComponent} from "./home/home.component";
import {SettingsComponent} from "./settings/settings.component";
import {TarifsComponent} from "./settings/tarifs/tarifs.component";
import {OtherComponent} from "./settings/other/other.component";
import {ClientManagementComponent} from "./home/client-management/client-management.component";
import {DriverManagementComponent} from "./home/driver-management/driver-management.component";
import {AdministratorComponent} from "./home/administrator/administrator.component";
import {DriversComponent} from "./home/administrator/drivers/drivers.component";
import {MenuHomeComponent} from "./home/menu-home.component";



const NAVIGATION_ROUTES: Routes = [
  { path: '', redirectTo: 'home/administrator/clients-table', pathMatch: 'full' },
  { path: 'home/client-management', component: ClientManagementComponent},
  { path: 'home/driver-management', component: DriverManagementComponent},
  { path: 'home/administrator', component: AdministratorComponent},
  { path: 'home/administrator/clients-table', component: ClientsTableComponent },
  { path: 'home/administrator/drivers', component: DriversComponent },
  { path: 'home/administrator/rides', component: RidesComponent },
  { path: 'home/menu-home', component: MenuHomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'settings/tarifs', component: TarifsComponent },
  { path: 'settings/other', component: OtherComponent },




];
export const CONST_ROUTING = RouterModule.forRoot(NAVIGATION_ROUTES);
