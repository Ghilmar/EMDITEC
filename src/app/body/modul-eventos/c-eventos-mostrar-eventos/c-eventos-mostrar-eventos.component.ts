import { Component, OnInit, Input } from '@angular/core';
import { ServicePotsService } from '../../../servicios/service-pots.service';
import { Curso }  from '../../../modelos/Curso'; 

@Component({
  selector: 'app-c-eventos-mostrar-eventos',
  templateUrl: './c-eventos-mostrar-eventos.component.html',
  styleUrls: ['./c-eventos-mostrar-eventos.component.css']
})
export class CEventosMostrarEventosComponent implements OnInit {

  cursos:Array<Curso>

  @Input() titulo_evento:string;
  @Input() detalles_del_evento:string;

  constructor(private postService: ServicePotsService) {
    this.cursos = new Array()
   }

  ngOnInit() {
    this.cursos=this.postService.llenarCursos();
  }

}
