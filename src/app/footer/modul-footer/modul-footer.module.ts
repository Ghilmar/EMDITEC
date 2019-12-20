import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CFooterComponent } from './c-footer/c-footer.component';



@NgModule({
  declarations: [CFooterComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CFooterComponent
  ]
})
export class ModulFooterModule { }
