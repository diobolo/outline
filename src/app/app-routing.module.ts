import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimelineComponent} from './timeline/timeline.component';
import {RosterComponent} from './roster/roster.component';
import {MapComponent} from './map/map.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {
    path: 'timeline',
    component: TimelineComponent
  }, {
    path: 'roster',
    component: RosterComponent
  }, {
    path: 'map',
    component: MapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
