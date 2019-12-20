import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CSecundariosTextoComponent } from './c-secundarios-texto/c-secundarios-texto.component';
import { CSecundariosPortadaComponent } from './c-secundarios-portada/c-secundarios-portada.component';
import { CSecundariosPrincipalComponent } from './c-secundarios-principal/c-secundarios-principal.component';



@NgModule({
  declarations: [
    CSecundariosTextoComponent, 
    CSecundariosPortadaComponent, 
    CSecundariosPrincipalComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CSecundariosTextoComponent, 
    CSecundariosPortadaComponent, 
    CSecundariosPrincipalComponent
  ]
})
export class ModulSecundariosModule { }
