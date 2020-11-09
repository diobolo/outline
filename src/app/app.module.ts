import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { TimelineComponent } from './timeline/timeline.component';
import { RosterComponent } from './roster/roster.component';
import { IdbModule } from './core/idb/idb.module';
import { ClientModule } from './core/client/client.module';
import { ProjectComponent } from './project/project.component';
import { PutComponent } from './project/put/put.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    TimelineComponent,
    RosterComponent,
    ProjectComponent,
    PutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IdbModule,
    ClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
