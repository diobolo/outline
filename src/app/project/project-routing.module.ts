import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PutComponent} from './put/put.component';
import {InitGuard} from '../core/guard/init.guard';
import {DetailComponent} from './detail/detail.component';
import {RosterComponent} from './person/roster/roster.component';
import {TimelineComponent} from './event/timeline/timeline.component';
import {MapComponent} from './location/map/map.component';
import {ListComponent} from './list/list.component';

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
        component: DetailComponent,
        children: [
          {
            path: 'roster',
            component: RosterComponent
          }, {
            path: 'timeline',
            component: TimelineComponent
          }, {
            path: 'map',
            component: MapComponent
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
