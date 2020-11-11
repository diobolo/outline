import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { RosterComponent } from './roster/roster.component';


@NgModule({
  declarations: [RosterComponent],
  imports: [
    CommonModule,
    PersonRoutingModule
  ]
})
export class PersonModule { }
