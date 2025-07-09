import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-http-client-demo',
  imports: [CommonModule, FormsModule],
  templateUrl: './http-client-demo.component.html',
  styleUrl: './http-client-demo.component.css'
})
export class HttpClientDemoComponent {

  constructor(private service: ProductServiceService) { }

  products: any[] = [];

  onClick() {
    this.service.fetch().subscribe((data) => this.products = data);
  }
}
