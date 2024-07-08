import { Component } from '@angular/core';
import { carro } from './carro';


@Component({
  selector: 'app-carro-compras',
  standalone: true,
  imports: [],
  templateUrl: './carro-compras.component.html',
  styleUrl: './carro-compras.component.scss'
})
export class CarroComprasComponent {

  compra = {
    "name": "Ruca Malen Capítulo 2 Malbec",
    "price": 1000, 
    "cantidad": 5,
    "total": 0 
  };

  calcularTotal() {
    this.compra.total = this.compra.price * this.compra.cantidad;
  }


  carro: carro[] = [
    


    
  ];


}
