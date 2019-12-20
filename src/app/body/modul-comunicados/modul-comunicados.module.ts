import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CComunicadosPrinciaplComponent } from './c-comunicados-princiapl/c-comunicados-princiapl.component';
import { CComunicadosTextoComponent } from './c-comunicados-texto/c-comunicados-texto.component';



@NgModule({
  declarations: [
    CComunicadosPrinciaplComponent, 
    CComunicadosTextoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CComunicadosPrinciaplComponent, 
    CComunicadosTextoComponent
  ]
})
export class ModulComunicadosModule { }
