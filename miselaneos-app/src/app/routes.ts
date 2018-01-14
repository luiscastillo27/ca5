import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ROUTES_USUARIO } from './routes.usuario';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'user/:id', component: UsuarioComponent,
    children: ROUTES_USUARIO
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });
