import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cart-form.component.html',
  styleUrl: './cart-form.component.css'
})
export class CartFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  cart!: FormGroup;

  ngOnInit(): void {
    this.cart = this.fb.group({
      name: ["", Validators.required],
      quantity: [0, Validators.required]
    });
  }

  onSubmit() {
    console.log(`Name: ${this.cart.value.name}, Quantity: ${this.cart.value.quantity}`)
    alert(`Name: ${this.cart.value.name}, Quantity: ${this.cart.value.quantity}`)
    this.cart.value.name = '';
    this.cart.value.quantity = 0;
  }
}
