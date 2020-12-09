import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { PutComponent } from './put/put.component';

const routes: Routes = [
  {
    path: '',
    component: MapComponent
  }, {
    path: 'put',
    component: PutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule {
}
