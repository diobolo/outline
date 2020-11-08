import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdbRoutingModule } from './idb-routing.module';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    IdbRoutingModule
  ]
})
export class IdbModule { }
