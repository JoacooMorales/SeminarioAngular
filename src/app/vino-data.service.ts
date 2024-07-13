import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { vino } from './vinos-list/vino';
import { HttpClient } from '@angular/common/http';



const URL = 'https://mocki.io/v1/0c66ec41-7ec9-4e9c-a527-0443eff75ed5' ;

@Injectable({
  providedIn: 'root'
})
export class VinoDataService {

  constructor(
    private http:HttpClient
  ) { }

  public getAll(): Observable <vino[]> {
    return this.http.get<vino[]>(URL)
    .pipe(
      tap((vinos:vino[]) => vinos.forEach(vino=>vino.quantity=0))
      
    );
  }
}
