import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-filter',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.css'
})
export class ProductFilterComponent implements OnInit {
  products = [
    { name: "Apple iPhone 15", category: "Electronics" },
    { name: "Nike Running Shoes", category: "Footwear" },
    { name: "Levi's Jeans", category: "Clothing" },
    { name: "Samsung Smart TV", category: "Electronics" },
    { name: "Instant Pot Duo", category: "Home Appliances" }
  ];

  newProducts: any[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => {
      const category = data.get("category");
      this.newProducts = this.products.filter((product) => product.category === category);
    })
  }


}
