import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from './components';


@NgModule({
  declarations: [
    ...fromComponents
  ],
  imports: [
    CommonModule
  ],
  exports: [...fromComponents.components]
})
export class MainModule { }
