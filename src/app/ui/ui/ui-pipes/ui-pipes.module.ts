import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DatePipe} from "./date.pipe";



@NgModule({
  declarations: [DatePipe],
  exports: [DatePipe],
  imports: [
    CommonModule
  ]
})
export class UiPipesModule { }
