import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CEventosPrincipalComponent } from './c-eventos-principal/c-eventos-principal.component';
import { CEventosMostrarEventosComponent } from './c-eventos-mostrar-eventos/c-eventos-mostrar-eventos.component';



@NgModule({
  declarations: [
    CEventosPrincipalComponent, 
    CEventosMostrarEventosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CEventosPrincipalComponent, 
    CEventosMostrarEventosComponent
  ]
})
export class ModulEventosModule { }
