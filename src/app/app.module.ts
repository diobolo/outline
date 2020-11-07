import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { TimelineComponent } from './timeline/timeline.component';
import { RosterComponent } from './roster/roster.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    TimelineComponent,
    RosterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
