import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// principal
import { CPortadaPrincipalComponent } from './head/modul-portada/c-portada-principal/c-portada-principal.component';
// secundarios
import { CSecundariosPrincipalComponent } from './body/modul-secundarios/c-secundarios-principal/c-secundarios-principal.component'; 
// desarrollo de software
import { CSoftwarePrincipalComponent } from './body/modul-desarrollo-software/c-software-principal/c-software-principal.component';
// Capacitacion
import { CCapacitacionPrincipalComponent } from './body/modul-capacitacion/c-capacitacion-principal/c-capacitacion-principal.component';
// Comunicados
import { CComunicadosPrinciaplComponent } from './body/modul-comunicados/c-comunicados-princiapl/c-comunicados-princiapl.component';
// Consultoria
import { CConsultoriaPrincipalComponent } from './body/modul-cosultoria/c-consultoria-principal/c-consultoria-principal.component';
// Eventos
import { CEventosPrincipalComponent } from './body/modul-eventos/c-eventos-principal/c-eventos-principal.component'; 
// sobre nosotros
import { CNosotrosPrincipalComponent } from './body/modul-nosotros/c-nosotros-principal/c-nosotros-principal.component';
// Preuniversitarios
import { CPreuniversitariosPrincipalComponent } from './body/modul-preuniversitarios/c-preuniversitarios-principal/c-preuniversitarios-principal.component';


const routes: Routes = [

  { path: '',   redirectTo: '/home', pathMatch: 'full'},
  { path:'home', component: CPortadaPrincipalComponent},

   // secundarios
   { path:'secundarios', component:CSecundariosPrincipalComponent  },
   // consultoria
   { path:'consultoria', component:CConsultoriaPrincipalComponent },
   // Preuniversitarios
   { path:'preuniversitario', component:CPreuniversitariosPrincipalComponent },
   // Desarrollo de software
   { path:'desarrollo-software', component:CSoftwarePrincipalComponent },
   // Capacitacion
   { path:'capacitacion', component:CCapacitacionPrincipalComponent },
   // Sobre nosotros
   { path:'nosotros', component:CNosotrosPrincipalComponent },
   // Comunicados
   { path: 'comunicados', component:CComunicadosPrinciaplComponent },
   // Eventos
   { path: 'eventos' , component:CEventosPrincipalComponent }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
