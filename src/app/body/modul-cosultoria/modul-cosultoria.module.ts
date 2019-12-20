import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CConsultoriaTextoComponent } from './c-consultoria-texto/c-consultoria-texto.component';
import { CConsultoriaPortadaComponent } from './c-consultoria-portada/c-consultoria-portada.component';
import { CConsultoriaPrincipalComponent } from './c-consultoria-principal/c-consultoria-principal.component';



@NgModule({
  declarations: [
    CConsultoriaTextoComponent, 
    CConsultoriaPortadaComponent, 
    CConsultoriaPrincipalComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CConsultoriaTextoComponent, 
    CConsultoriaPortadaComponent, 
    CConsultoriaPrincipalComponent
  ]
})
export class ModulCosultoriaModule { }
