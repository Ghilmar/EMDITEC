import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulSecundariosModule } from './modul-secundarios/modul-secundarios.module';
import { ModulDesarrolloSoftwareModule } from './modul-desarrollo-software/modul-desarrollo-software.module';
import { ModulCapacitacionModule } from './modul-capacitacion/modul-capacitacion.module';
import { ModulComunicadosModule } from './modul-comunicados/modul-comunicados.module';
import { ModulCosultoriaModule } from './modul-cosultoria/modul-cosultoria.module';
import { ModulEventosModule } from './modul-eventos/modul-eventos.module';
import { ModulNosotrosModule } from './modul-nosotros/modul-nosotros.module';
import { ModulPreuniversitariosModule } from './modul-preuniversitarios/modul-preuniversitarios.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    ModulSecundariosModule,
    ModulDesarrolloSoftwareModule,
    ModulCapacitacionModule,
    ModulComunicadosModule,
    ModulCosultoriaModule,
    ModulEventosModule,
    ModulNosotrosModule,
    ModulPreuniversitariosModule,
    
  ]
})
export class BodyModule { }
