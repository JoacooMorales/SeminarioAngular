import { Component } from '@angular/core';
import { VinoCarroService } from '../vino-carro.service';
import { vino } from '../vinos-list/vino';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';


/* maneja la logica del carrito */

@Component({
  selector: 'app-carro-compras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carro-compras.component.html',
  styleUrl: './carro-compras.component.scss'
})
export class CarroComprasComponent {

  listaCarro! : Observable<vino[]> ;
vino: any;

  constructor(private carro: VinoCarroService) {
  this.listaCarro = carro.listaCarro.asObservable();
  }
    _listaCarro: vino[] = [];


    addToCart(vino: vino): void {
    }

    


}
