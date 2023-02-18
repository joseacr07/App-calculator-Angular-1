import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-operadores',
  templateUrl: './operadores.component.html',
  styleUrls: ['./operadores.component.css']
})

export class OperadoresComponent {

  operandoA:number = 0
  operandoB:number = 0

  @Output() resultadoSuma = new EventEmitter<number>();

  sumar():void{
  
   let resultado = this.operandoA + this.operandoB;
   this.resultadoSuma.emit(resultado)

  }

  




  


}
