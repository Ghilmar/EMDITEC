import { Component, OnInit, Input } from '@angular/core';
import { ServicePotsService } from '../../../servicios/service-pots.service';
import { Curso }  from '../../../modelos/Curso'; 

@Component({
  selector: 'app-c-capacitacion-presentacion-del-cursos',
  templateUrl: './c-capacitacion-presentacion-del-cursos.component.html',
  styleUrls: ['./c-capacitacion-presentacion-del-cursos.component.css']
})
export class CCapacitacionPresentacionDelCursosComponent implements OnInit {

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
