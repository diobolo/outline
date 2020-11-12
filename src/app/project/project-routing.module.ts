import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PutComponent} from './put/put.component';
import {InitGuard} from '../core/guard/init.guard';
import {DetailComponent} from './detail/detail.component';
import {ListComponent} from './list/list.component';
import {ProjectComponent} from './project/project.component';

const routes: Routes = [
  {
    path: 'project',
    canActivate: [InitGuard],
    children: [
      {
        path: '',
        component: ListComponent
      }, {
        path: 'put',
        component: PutComponent
      }, {
        path: ':id',
        component: ProjectComponent,
        data: {name: 'project'},
        children: [
          {
            path: '',
            component: DetailComponent
          }, {
            path: 'roster',
            loadChildren: () => import('./person/person.module').then(m => m.PersonModule)
          }, {
            path: 'timeline',
            loadChildren: () => import('./event/event.module').then(m => m.EventModule)
          }, {
            path: 'map',
            loadChildren: () => import('./location/location.module').then(m => m.LocationModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule {
}
