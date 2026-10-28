import { Component, inject } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { LandingDataService } from '../../../../core/services/landing-data.service';

@Component({
  selector: 'app-faq-section',
  imports: [MatExpansionModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqSectionComponent {
  readonly items = inject(LandingDataService).faq;
}
