import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products-new',
  imports: [CommonModule, FormsModule],
  templateUrl: './products-new.component.html',
  styleUrl: './products-new.component.css'
})
export class ProductsNewComponent {
  products = [
    { name: 'Keyboard', price: 599 },
    { name: 'Monitor', price: 4999 },
    { name: 'Mouse', price: 499 },
    { name: 'CPU', price: 19999 },
    { name: 'UPS', price: 2999 },
    { name: 'HardDrive', price: 4999 }
  ];
}
