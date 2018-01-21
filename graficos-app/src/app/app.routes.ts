import { RouterModule, Routes } from '@angular/router';
import { LineaComponent } from './components/linea/linea.component';
import { BarrasComponent } from './components/barras/barras.component';
import { DonaComponent } from './components/dona/dona.component';
import { RadarComponent } from './components/radar/radar.component';

const APP_ROUTES: Routes = [
  { path: 'linea', component: LineaComponent },
  { path: 'barras', component: BarrasComponent },
  { path: 'dona', component: DonaComponent },
  { path: 'radar', component: RadarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'barras' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });
