import { Component, input } from '@angular/core';

@Component({
  selector: 'app-review-card',
  imports: [],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.scss'
})
export class ReviewCardComponent {
  item = input<{
    imgSrc: string;
    name: string;
    review: string;
  }>();
}
