import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectComponent} from './project.component';
import {PutComponent} from './put/put.component';
import {InitGuard} from '../core/guard/init.guard';

const routes: Routes = [
  {
    path: 'project',
    canActivate: [InitGuard],
    children: [
      {
        path: '',
        component: ProjectComponent
      }, {
        path: 'put',
        component: PutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
