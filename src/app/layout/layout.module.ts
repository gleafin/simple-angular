import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './default/head/head.component';
import { SecondHeadComponent } from './default/main/second-head/second-head.component';
import { MainComponent } from './default/main/main.component';
import { DefaultComponent } from './default/default.component';

@NgModule({
  declarations: [HeadComponent, SecondHeadComponent, MainComponent, DefaultComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class LayoutModule { }
