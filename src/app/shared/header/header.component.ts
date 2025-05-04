import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { LinkComponent } from '../link/link.component';

@Component({
  selector: 'app-header',
  imports: [LinkComponent, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
