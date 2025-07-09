import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  products = [
    {
      name: 'Wireless Mouse',
      imageUrl: 'https://placehold.co/150x150/orange/white',
      price: '999',
    },
    {
      name: 'Wireless Keyboard',
      imageUrl: 'https://placehold.co/150x150/green/white',
      price: '1400',
    },
    {
      name: 'Monitor',
      imageUrl: 'https://placehold.co/150x150/blue/white',
      price: '3000',
    }
  ];

  onClick(name: string) {
    alert(`You clicked ${name}`)
  }
}
