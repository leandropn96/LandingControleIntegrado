import { Component } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';

@Component({
  selector: 'app-site-footer',
  imports: [TablerIconsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
}
