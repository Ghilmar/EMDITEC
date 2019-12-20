import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CSoftwarePrincipalComponent } from './c-software-principal/c-software-principal.component';
import { CSoftwarePortadaComponent } from './c-software-portada/c-software-portada.component';
import { CSoftwareTextoComponent } from './c-software-texto/c-software-texto.component';



@NgModule({
  declarations: [
    CSoftwarePrincipalComponent, 
    CSoftwarePortadaComponent, 
    CSoftwareTextoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CSoftwarePrincipalComponent, 
    CSoftwarePortadaComponent, 
    CSoftwareTextoComponent
  ]
})
export class ModulDesarrolloSoftwareModule { }
