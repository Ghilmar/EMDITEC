import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulMenuModule } from './modul-menu/modul-menu.module';
import { ModulPortadaModule } from './modul-portada/modul-portada.module';

import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports :[
    ModulMenuModule,
    ModulPortadaModule
  ]
})
export class HeadModule { }
