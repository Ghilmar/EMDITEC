import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CPreuniversitariosPrincipalComponent } from './c-preuniversitarios-principal/c-preuniversitarios-principal.component';
import { CPreuniversitariosPortadaComponent } from './c-preuniversitarios-portada/c-preuniversitarios-portada.component';
import { CPreuniversitariosTextoComponent } from './c-preuniversitarios-texto/c-preuniversitarios-texto.component';



@NgModule({
  declarations: [
    CPreuniversitariosPrincipalComponent, 
    CPreuniversitariosPortadaComponent,
    CPreuniversitariosTextoComponent
    ],
  imports: [
    CommonModule
  ],
  exports:[
    CPreuniversitariosPrincipalComponent, 
    CPreuniversitariosPortadaComponent,
    CPreuniversitariosTextoComponent
  ]
})
export class ModulPreuniversitariosModule { }
