import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TimelineComponent} from './timeline/timeline.component';
import {PutComponent} from './put/put.component';

const routes: Routes = [
  {
    path: '',
    component: TimelineComponent
  }, {
    path: 'put',
    component: PutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule {
}
