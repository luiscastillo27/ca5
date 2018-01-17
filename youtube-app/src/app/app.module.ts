import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MenuComponent } from './components/menu/menu.component';
import { YoutubeService } from './services/youtube.service';
import { VideoyoutubePipe } from './pipes/videoyoutube.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent,
    VideoyoutubePipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    YoutubeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
