import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { BestSellerCardComponent } from './ui/best-seller-card/best-seller-card.component';

@Component({
  selector: 'app-home',
  imports: [ButtonComponent, BestSellerCardComponent],
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
}
