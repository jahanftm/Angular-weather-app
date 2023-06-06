import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UiComponentsModule} from "./ui-components/ui-components.module";
import {UiPipesModule} from "./ui-pipes/ui-pipes.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UiComponentsModule,
    UiPipesModule
  ],
  exports: [
    UiComponentsModule,
    UiPipesModule
  ]
})
export class UiModule {
}
