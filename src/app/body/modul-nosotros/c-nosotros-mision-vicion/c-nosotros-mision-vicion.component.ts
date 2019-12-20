import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-c-nosotros-mision-vicion',
  templateUrl: './c-nosotros-mision-vicion.component.html',
  styleUrls: ['./c-nosotros-mision-vicion.component.css']
})
export class CNosotrosMisionVicionComponent implements OnInit {

  @Input() titulo_uno:string;
  @Input() titulo_dos:string;
  @Input() texto_content:string;


  constructor() { }

  ngOnInit() {
  }

}
