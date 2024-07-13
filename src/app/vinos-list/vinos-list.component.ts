import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { vino } from './vino';
import { InputIntegerComponent } from "../input-integer/input-integer.component";
import { VinoCarroService } from '../vino-carro.service';
import { VinoDataService } from '../vino-data.service';

@Component({
    selector: 'app-vinos-list',
    standalone: true,
    templateUrl: './vinos-list.component.html',
    styleUrls: ['./vinos-list.component.scss'],
    imports: [CommonModule, FormsModule, InputIntegerComponent]
})
export class VinosListComponent {




  vinos: vino[] = [];

  constructor (
    private carro:VinoCarroService,
    private vinosDataService:VinoDataService){
    
  }

  ngOnInit () : void {
    this.vinosDataService.getAll()
    .subscribe(vinos=> this.vinos=vinos);
  }


  addToCart(vino: vino) : void {
    if (vino.quantity>0) {
    this.carro.addToCart(vino);
    vino.stock -= vino.quantity;
    vino.quantity =0;
  }
  }

  maxReached (m:string){
    alert(m)
  }

 
  

}
