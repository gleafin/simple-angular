import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { SecondHeadComponent } from './second-head/second-head.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [HeadComponent, SecondHeadComponent, MainComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
