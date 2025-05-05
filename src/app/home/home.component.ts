import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { BestSellerCardComponent } from './ui/best-seller-card/best-seller-card.component';
import { ReviewCardComponent } from './ui/review-card/review-card.component';

@Component({
  selector: 'app-home',
  imports: [ButtonComponent, BestSellerCardComponent, ReviewCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly BEST_SELLERS = [
    {
      imgSrc: '/images/strawberry_tres_leches.webp',
      header: 'Strawberry Tres Leches',
      caption:
        'Filled  and topped with chantilly cream and fresh local strawberries.',
    },
    {
      imgSrc: '/images/mango_tres_leches.webp',
      header: 'Mango Tres Leches',
      caption:
        'Classic mango and cream with layers of fresh Philippine mangoes.',
    },
    {
      imgSrc: '/images/dear_ingrid.webp',
      header: 'Dear Ingrid',
      caption: `This is Mama Pappot's love letter to her daughter, Ingrid.`,
    },
  ];

  readonly LOVE_NOTES = [
    {
      review: `“Good job on the tres leches! Really really good! Not too wet! And its sweet but perfect pairing with strawberries to neutralize the sweet then the taste is just really good! Addicting sya”`,
      imgSrc: '/images/strawberry_tres_leches.webp',
      name: 'Instagram User',
    },
    {
      review: `“Dear Ingrid is super good! Everything just blends together in your mouth! Probably their best cake ever”`,
      imgSrc: 'images/mango_tres_leches.webp',
      name: '@jerbin',
    },
    {
      review: `“Super good ang Dear Ingrid! Hindi masyado matamis.”`,
      imgSrc: '/images/dear_ingrid.webp',
      name: '@jarmawww',
    },
  ];
}
