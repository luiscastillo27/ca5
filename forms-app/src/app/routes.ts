import { RouterModule, Routes } from '@angular/router';
import { FormDataComponent } from './components/form-data/form-data.component';
import { FormTemplatesComponent } from './components/form-templates/form-templates.component';

const APP_ROUTES: Routes = [
  { path: 'data', component: FormDataComponent },
  { path: 'template', component: FormTemplatesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'template' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
