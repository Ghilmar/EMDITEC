import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CCapacitacionPortadaComponent } from './c-capacitacion-portada/c-capacitacion-portada.component';
import { CCapacitacionTextoComponent } from './c-capacitacion-texto/c-capacitacion-texto.component';
import { CCapacitacionPrincipalComponent } from './c-capacitacion-principal/c-capacitacion-principal.component';
import { CCapacitacionPresentacionDelCursosComponent } from './c-capacitacion-presentacion-del-cursos/c-capacitacion-presentacion-del-cursos.component';



@NgModule({
  declarations: [
    CCapacitacionPortadaComponent, 
    CCapacitacionTextoComponent, 
    CCapacitacionPrincipalComponent, 
    CCapacitacionPresentacionDelCursosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CCapacitacionPortadaComponent, 
    CCapacitacionTextoComponent, 
    CCapacitacionPrincipalComponent, 
    CCapacitacionPresentacionDelCursosComponent
  ]
})
export class ModulCapacitacionModule { }
