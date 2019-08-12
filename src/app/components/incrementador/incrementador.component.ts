import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress', {static: false}) txtProgress: ElementRef;
  @Input('nombre') label: string = ''
  @Input() porcentaje: number = 50
  @Output() cambioValor: EventEmitter<number> = new EventEmitter

  constructor() {
    console.log( this.label)
   }

  ngOnInit() {
    console.log( this.label, 'oninit')
  }
  onChange (event: number) {
    let elemtHtml = document.getElementsByName('porcentaje')[0]

   if( event >= 100) {
    this.porcentaje = 100
   } else if ( event <= 0) {
    this.porcentaje = 0
   } else {
    this.porcentaje = event
   }
   this.txtProgress.nativeElement.value = this.porcentaje
   this.cambioValor.emit(this.porcentaje)
  
  }
  handleValue(value) {
    if(this.porcentaje <= 0 && value < 0)    return this.porcentaje = 0

    if(this.porcentaje >= 100 && value > 0) return this.porcentaje = 100

    this.porcentaje += value
    this.cambioValor.emit(this.porcentaje)
    this.txtProgress.nativeElement.focus()
  }


}
