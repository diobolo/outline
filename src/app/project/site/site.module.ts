import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapComponent} from './map/map.component';
import {FormsModule} from '@angular/forms';
import {SiteRoutingModule} from './site-routing.module';
import { PutComponent } from './put/put.component';


@NgModule({
  declarations: [MapComponent, PutComponent],
  imports: [
    CommonModule,
    SiteRoutingModule,
    FormsModule
  ]
})
export class SiteModule {
}
