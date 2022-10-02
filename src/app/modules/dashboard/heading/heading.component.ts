import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {

   mensg: string = '';
  constructor() { }

  ngOnInit(): void {
    //this.findMensagens('error');
  }

/*   findMensagens(mensagens: string){
    this.mensg = Mensagens[mensagens];
    return this.mensg;
  } */

}
