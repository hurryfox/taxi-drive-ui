import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { SettingsComponent } from "./settings/settings.component";
import { HelpComponent } from "./help/help.component";
import {ClientsDashComponent} from "./home/clients/clients.component";
import {DriversDashComponent} from "./home/drivers/drivers.component";
import {AdminDashComponent} from "./home/admin/admin.component";

const MAINMENU_ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children:[
       { path: 'clients', component: ClientsDashComponent },
       { path: 'drivers', component: DriversDashComponent },
       { path: 'admin', component: AdminDashComponent }
     ]
  },
  { path: 'settings', component: SettingsComponent },
  { path: 'help', component: HelpComponent }
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
