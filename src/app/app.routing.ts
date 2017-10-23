import { Routes, RouterModule } from '@angular/router';
import { ClientsTableComponent } from "./clients-table/clients-table.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RidesComponent} from "./rides/rides.component";
import { StatisticsComponent} from "./statistics/statistics.component";


const MAINMENU_ROUTES: Routes = [
  { path: '', redirectTo: '/weather', pathMatch: 'full' },
  { path: 'clients-table', component: ClientsTableComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'rides', component: RidesComponent },
  { path: 'statistics', component: StatisticsComponent },


];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
