import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cart-form.component.html',
  styleUrl: './cart-form.component.css'
})
export class CartFormComponent {

  cart = new FormGroup({
    name: new FormControl(""),
    quantity: new FormControl(0)
  });

  onSubmit() {
    console.log(`Name: ${this.cart.value.name}, Quantity: ${this.cart.value.quantity}`)
    alert(`Name: ${this.cart.value.name}, Quantity: ${this.cart.value.quantity}`)
    this.cart.value.name = '';
    this.cart.value.quantity = 0;
  }
}
