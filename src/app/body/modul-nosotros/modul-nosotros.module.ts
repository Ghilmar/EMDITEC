import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CNosotrosMisionVicionComponent } from './c-nosotros-mision-vicion/c-nosotros-mision-vicion.component';
import { CNosotrosPrincipalComponent } from './c-nosotros-principal/c-nosotros-principal.component';
import { CNosotrosTextoComponent } from './c-nosotros-texto/c-nosotros-texto.component';



@NgModule({
  declarations: [
    CNosotrosMisionVicionComponent, 
    CNosotrosPrincipalComponent, 
    CNosotrosTextoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CNosotrosMisionVicionComponent, 
    CNosotrosPrincipalComponent, 
    CNosotrosTextoComponent
  ]
})
export class ModulNosotrosModule { }
