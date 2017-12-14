import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from "./dash/dash.component";
import { SettingsComponent } from "./settings/settings.component";
import { HelpComponent } from "./help/help.component";
import {ClientsDashComponent} from "./dash/clients/clients.component";
import {DriversDashComponent} from "./dash/drivers/drivers.component";
import {AdminDashComponent} from "./dash/admin/admin.component";
import {GeoCitiesComponent} from "./dash/admin/geo/cities.component";
import {GeoDistrictsComponent} from "./dash/admin/geo/districts.component";
import {GeoStreetsComponent} from "./dash/admin/geo/streets.component";
import {GeoStdComponent} from "./dash/admin/geo/streettodistrict.component";
import {RatesDtdComponent} from "./dash/admin/rates/dtd.component";
import {RatesCtcComponent} from "./dash/admin/rates/ctc.component";

const MAINMENU_ROUTES: Routes = [
  { path: '', redirectTo: '/dash', pathMatch: 'full' },
  { path: 'dash', component: DashComponent, children:[
       { path: 'clients', component: ClientsDashComponent },
       { path: 'drivers', component: DriversDashComponent },
       { path: 'admin', children:[
         { path: 'geo/cities', component: GeoCitiesComponent },
         { path: 'geo/streets', component: GeoStreetsComponent },
         { path: 'geo/districts', component: GeoDistrictsComponent },
         { path: 'geo/std', component: GeoStdComponent },
         { path: 'rates/ctc', component: RatesCtcComponent },
         { path: 'rates/dtd', component: RatesDtdComponent },
       ] }
     ]
  },
  { path: 'settings', component: SettingsComponent },
  { path: 'help', component: HelpComponent }
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
