import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  imports: [CommonModule, FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blogs = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5', 'Post 6', 'Post 7', 'Post 8', 'Post 9', 'Post 10', 'Post 11'];
  start = 0
  end = 5
  onClickNext() {
    if (this.end < this.blogs.length) {
      this.start += 5
      this.end += 5
    }
  }
  onClickPrevious() {
    if (this.start >= 5 && this.end >= 10) {
      this.start -= 5
      this.end -= 5
    }
  }
}
