import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {
 titulo = "Gráfica 2"
 titulo2 = "Gráfica 3"
 titulo4 = "Gráfica 4"

 labels1 :string[] = ['Account', 'Stock', 'Other Sales'];
 data1:number [] =[200,500,100]
  constructor() { }

  ngOnInit(): void {
  }
}
