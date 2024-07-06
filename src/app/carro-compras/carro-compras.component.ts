import { Component } from '@angular/core';

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
    "price": 1000, // Almacenar el precio como un número
    "cantidad": 5,
    "total": 0 // Inicializar el total como un número
  };

  // Calcular el total basado en el precio y la cantidad
  calcularTotal() {
    this.compra.total = this.compra.price * this.compra.cantidad;
  }


}
