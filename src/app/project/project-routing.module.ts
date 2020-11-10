import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectComponent} from './project.component';
import {PutComponent} from './put/put.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent
  }, {
    path: 'project',
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
