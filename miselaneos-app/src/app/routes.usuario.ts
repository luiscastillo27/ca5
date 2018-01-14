import { Routes } from '@angular/router';

import { UsuarioDetalleComponent} from './components/usuario/usuario-detalle.component';
import { UsuarioEditarComponent} from './components/usuario/usuario-editar.component';
import { UsuarioNuevoComponent} from './components/usuario/usuario-nuevo.component';

export const ROUTES_USUARIO: Routes = [
  { path: 'nuevo', component: UsuarioNuevoComponent },
  { path: 'editar', component: UsuarioEditarComponent },
  { path: 'detalle', component: UsuarioDetalleComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'nuevo' }
];
