import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PeliculasService } from './services/peliculas.service';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { MenuComponent } from './components/menu/menu.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { APP_ROUTING } from './routes';
import { HttpModule, JsonpModule } from "@angular/http";
import { ImagenesPipe } from './pipes/imagenes.pipe';
import { GaleriaComponent } from './components/galeria/galeria.component';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BusquedaComponent,
    MenuComponent,
    PeliculaComponent,
    ImagenesPipe,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    APP_ROUTING
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
