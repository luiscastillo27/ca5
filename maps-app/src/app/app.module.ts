import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MapsService } from './services/maps.service';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    AgmSnazzyInfoWindowModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBm5JkIiw_czv3aKqANVlYzVTep-OSOx3k'
    })
  ],
  providers: [
    MapsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
