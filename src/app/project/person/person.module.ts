import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { RosterComponent } from './roster/roster.component';
import { PutComponent } from './put/put.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [RosterComponent, PutComponent],
  imports: [
    CommonModule,
    PersonRoutingModule,
    FormsModule
  ]
})
export class PersonModule { }
