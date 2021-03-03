import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ListComponent } from './cus/project/list/list.component';
import { DetailComponent } from './cus/project/detail/detail.component';
import { JobComponent } from './cus/job/job.component';
import { DashboardComponent } from './cus/dashboard/dashboard.component';
import { ToolComponent } from './cus/tool/tool.component';
import { DataComponent } from './cus/data/data.component';


@NgModule({
  declarations: [ListComponent, DetailComponent, JobComponent, DashboardComponent, ToolComponent, DataComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
