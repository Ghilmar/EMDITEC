import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso }  from '../modelos/Curso';


@Injectable({
  providedIn: 'root'
})
export class ServicePotsService {

  cursos : Array<Curso>
  curso : Curso;
  public url:string;
  private List = new Array();
  otro = new Array();

  constructor(private http:HttpClient) {
    this.url = "http://emditecsucre.com/EMDITEC/";
    this.cursos = new Array()
    
   }
   getPosts():Observable<any>{

    return this.http.get(this.url+"Prueba/cursos");
   }
   
    llenarCursos(): Curso[]{
      this.cursos = []
      this.getPosts().subscribe(
        result => {
          for(let clave in result){
            if(result.hasOwnProperty(clave)){
              this.List.push(result[clave]);
            }
          }
          //console.log('Primera   ' + this.List[0][0].nombre);
          for (let item of this.List[0]){
            this.cursos.push(new Curso(item.nombre, item.imagen));
          }
          
        },
        error => {
          console.log(<any>Error)
        }


      );
      
   
    return this.cursos
   }
}