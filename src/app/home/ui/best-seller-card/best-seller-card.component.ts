import { Component, input } from '@angular/core';

@Component({
  selector: 'app-best-seller-card',
  imports: [],
  templateUrl: './best-seller-card.component.html',
  styleUrl: './best-seller-card.component.scss',
})
export class BestSellerCardComponent {
  item = input<{
    imgSrc: string;
    header: string;
    caption: string;
  }>();
}
