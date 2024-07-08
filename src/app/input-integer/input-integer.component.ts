import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-integer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent {
  @Input() quantity!: number;
  @Input() max!: number;
  @Output() quantityChange : EventEmitter<number> = new EventEmitter <number>();
  @Output() maxReached : EventEmitter <string> = new EventEmitter<string>(); 

  upQuantity(): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    else{
      this.maxReached.emit ("se alcanzó el max") ;
    }
  }

  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  onChangeQuantity(event: any): void {
    console.log(event.key);
    this.quantityChange.emit(this.quantity);
  }
}
