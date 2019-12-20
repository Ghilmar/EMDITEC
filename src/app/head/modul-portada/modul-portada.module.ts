import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CPortadaMovimientoComponent } from './c-portada-movimiento/c-portada-movimiento.component';
import { CPortadaPrincipalComponent } from './c-portada-principal/c-portada-principal.component';
import { CPortadaTextoComponent } from './c-portada-texto/c-portada-texto.component';



@NgModule({
  declarations: [
    CPortadaMovimientoComponent, 
    CPortadaPrincipalComponent, 
    CPortadaTextoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CPortadaMovimientoComponent, 
    CPortadaPrincipalComponent, 
    CPortadaTextoComponent
  ]
})
export class ModulPortadaModule { }
