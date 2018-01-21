import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//ROUTER
import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { LineaComponent } from './components/linea/linea.component';
import { MenuComponent } from './components/menu/menu.component';
import { BarrasComponent } from './components/barras/barras.component';
import { DonaComponent } from './components/dona/dona.component';
import { RadarComponent } from './components/radar/radar.component';

@NgModule({
  declarations: [
    AppComponent,
    LineaComponent,
    MenuComponent,
    BarrasComponent,
    DonaComponent,
    RadarComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
