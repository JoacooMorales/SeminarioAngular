import { Injectable } from '@angular/core';
import { vino } from './vinos-list/vino';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VinoCarroService {

  private _listaCarro : vino[] = [];
  listaCarro : BehaviorSubject<vino[]>  = new BehaviorSubject<vino []> ([]);

  constructor() { }


  addToCart(vino : vino) {
    let item = this._listaCarro.find( (v1) => v1.name ==vino.name);
    if (!item){
      this._listaCarro.push({...vino});
    } else{
      item.quantity +=vino.quantity;
    }
    this.listaCarro.next(this._listaCarro); // equivalente al emitt de eventos
  }

}


