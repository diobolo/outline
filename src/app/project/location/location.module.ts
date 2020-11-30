import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapComponent} from './map/map.component';
import {FormsModule} from '@angular/forms';
import {LocationRoutingModule} from './location-routing.module';


@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    LocationRoutingModule,
    FormsModule
  ]
})
export class LocationModule {
}
