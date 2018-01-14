import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Routes
import { APP_ROUTING } from './routes';
import { AppComponent } from './app.component';
import { FormTemplatesComponent } from './components/form-templates/form-templates.component';
import { FormDataComponent } from './components/form-data/form-data.component';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    FormTemplatesComponent,
    FormDataComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
