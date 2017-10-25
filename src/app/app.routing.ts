import { Routes, RouterModule } from '@angular/router';
import { ClientsTableComponent } from "./home/clients-table/clients-table.component";
import { DashboardComponent } from "./home/dashboard/dashboard.component";
import { RidesComponent} from "./home/rides/rides.component";
import { StatisticsComponent} from "./home/statistics/statistics.component";
import {HomeComponent} from "./home/home.component";
import {SettingsComponent} from "./settings/settings.component";


const MAINMENU_ROUTES: Routes = [
  { path: '', redirectTo: 'home/clients-table', pathMatch: 'full' },
  { path: 'home/clients-table', component: ClientsTableComponent },
  { path: 'home/dashboard', component: DashboardComponent },
  { path: 'home/rides', component: RidesComponent },
  { path: 'home/statistics', component: StatisticsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'settings', component: SettingsComponent },


];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
