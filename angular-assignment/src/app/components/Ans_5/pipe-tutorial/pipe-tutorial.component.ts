import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PriceFormatPipe } from '../pipes/price-format.pipe';

@Component({
  selector: 'app-pipe-tutorial',
  imports: [CommonModule, FormsModule, PriceFormatPipe],
  templateUrl: './pipe-tutorial.component.html',
  styleUrl: './pipe-tutorial.component.css'
})
export class PipeTutorialComponent {
  price: number = 0;
}
