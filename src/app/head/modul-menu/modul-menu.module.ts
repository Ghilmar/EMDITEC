import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CNavbarComponent } from './c-navbar/c-navbar.component';
// ruting
import { AppRoutingModule } from '../../app-routing.module'



@NgModule({
  declarations: [CNavbarComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  
  exports :[
    CNavbarComponent
  ]
})
export class ModulMenuModule { }
