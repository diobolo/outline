import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProjectRoutingModule} from './project-routing.module';
import {DetailComponent} from './detail/detail.component';
import {PersonModule} from './person/person.module';
import {PutComponent} from './put/put.component';
import {FormsModule} from '@angular/forms';
import {AffairModule} from './affair/affair.module';
import {SiteModule} from './site/site.module';
import {ListComponent} from './list/list.component';
import { ProjectComponent } from './project/project.component';


@NgModule({
  declarations: [
    DetailComponent,
    PutComponent,
    ListComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    FormsModule,
    PersonModule,
    AffairModule,
    SiteModule
  ]
})
export class ProjectModule {
}
