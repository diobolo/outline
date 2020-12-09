import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline/timeline.component';
import { PutComponent } from './put/put.component';
import {FormsModule} from '@angular/forms';
import {AffairRoutingModule} from './affair-routing.module';



@NgModule({
  declarations: [TimelineComponent, PutComponent],
  imports: [
    CommonModule,
    AffairRoutingModule,
    FormsModule
  ]
})
export class AffairModule { }
