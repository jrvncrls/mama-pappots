import { NgClass, NgStyle } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgClass, NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  label = input('Button');
  color = input<'primary' | 'secondary'>('primary');
  borderRadius = input<10 | 30>(10);
  clickChange = output<boolean>();
}
