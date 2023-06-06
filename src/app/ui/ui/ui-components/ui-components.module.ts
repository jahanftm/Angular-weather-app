import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UiLoadingComponent} from "./ui-loading/ui-loading.component";
import {UiNoResultComponent} from "./ui-no-result/ui-no-result.component";


@NgModule({
  declarations: [
    UiLoadingComponent,
    UiNoResultComponent
  ],
  exports: [
    UiLoadingComponent,
    UiNoResultComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UiComponentsModule {
}
