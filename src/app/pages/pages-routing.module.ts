import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from '../layout/default/default.component';
import { HeadComponent } from '../layout/default/head/head.component';
import { MainComponent } from '../layout/default/main/main.component';
import { SecondHeadComponent } from '../layout/default/main/second-head/second-head.component';
import { DashboardComponent } from './cus/dashboard/dashboard.component';
import { DataComponent } from './cus/data/data.component';
import { JobComponent } from './cus/job/job.component';
import { DetailComponent } from './cus/project/detail/detail.component';
import { ListComponent } from './cus/project/list/list.component';
import { ToolComponent } from './cus/tool/tool.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'console',
  pathMatch: 'full'
}, {
  path: 'console',
  component: DefaultComponent,
  children: [{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'project',
    component: ListComponent,
    pathMatch: 'full',
    // children: [
    //   {
    //     path: '',
    //     redirectTo: 'list',
    //     pathMatch: 'full'
    //   },
    //   { path: 'list',
    //     component: ListComponent ,
    //     pathMatch: 'full'
    //   },
    //   { path: 'detail',

    //     component: SecondHeadComponent,
    //     children: [{
    //       path: '',
    //       redirectTo: 'setting',
    //       pathMatch: 'full'
    //     },{
    //       path: 'setting',
    //       component: DetailComponent,
    //       pathMatch: 'full'
    //     },{
    //       path: 'job',
    //       component: JobComponent,
    //       pathMatch: 'full'
    //     }]
    //   }
    // ],
  }, { path: 'project/detail',

  component: SecondHeadComponent,
  children: [
    {
      path: '',
      redirectTo: 'setting',
      pathMatch: 'full'
    },
    {
    path: 'setting',
    component: DetailComponent,
    pathMatch: 'full'
  }, {
    path: 'job',
    component: JobComponent,
    pathMatch: 'full'
  }, {
    path: 'tool',
    component: ToolComponent,
    pathMatch: 'full'
  }, {
    path: 'data',
    component: DataComponent,
    pathMatch: 'full'
  }]
}]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
