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
import { ProjectModule } from './project/project.module';
import {FormsModule} from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    TimelineComponent,
    RosterComponent,
    ProjectComponent,
    PutComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IdbModule,
    ClientModule,
    ProjectModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
