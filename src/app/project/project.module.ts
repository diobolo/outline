import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProjectRoutingModule} from './project-routing.module';
import {DetailComponent} from './detail/detail.component';
import {PersonModule} from './person/person.module';
import {PutComponent} from './put/put.component';
import {ProjectComponent} from './project.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ProjectComponent,
    DetailComponent,
    PutComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    FormsModule,
    PersonModule
  ]
})
export class ProjectModule {
}
