import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from "./dash/dash.component";
import { SettingsComponent } from "./settings/settings.component";
import { HelpComponent } from "./help/help.component";
import {ClientsDashComponent} from "./dash/clients/clients.component";
import {DriversDashComponent} from "./dash/drivers/drivers.component";
import {AdminDashComponent} from "./dash/admin/admin.component";

const MAINMENU_ROUTES: Routes = [
  { path: '', redirectTo: '/dash', pathMatch: 'full' },
  { path: 'dash', component: DashComponent, children:[
       { path: 'clients', component: ClientsDashComponent },
       { path: 'drivers', component: DriversDashComponent },
       { path: 'admin', component: AdminDashComponent }
     ]
  },
  { path: 'settings', component: SettingsComponent },
  { path: 'help', component: HelpComponent }
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
