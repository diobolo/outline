import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RosterComponent} from './roster/roster.component';
import {PutComponent} from './put/put.component';

const routes: Routes = [
  {
    path: '',
    component: RosterComponent
  }, {
    path: 'put',
    component: PutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule {
}
