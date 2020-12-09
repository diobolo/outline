import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PutComponent} from './put/put.component';
import {DetailComponent} from './detail/detail.component';
import {ListComponent} from './list/list.component';
import {ProjectComponent} from './project/project.component';

const routes: Routes = [
  {
    path: 'project',
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
            loadChildren: () => import('./affair/affair.module').then(m => m.AffairModule)
          }, {
            path: 'map',
            loadChildren: () => import('./site/site.module').then(m => m.SiteModule)
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
