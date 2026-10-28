import { Component, inject, signal } from '@angular/core';
import { LandingDataService } from '../../../../core/services/landing-data.service';

@Component({
  selector: 'app-testimonials-section',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsSectionComponent {
  readonly items = inject(LandingDataService).testimonials;
  readonly index = signal(0);

  next(): void {
    this.index.update((i) => (i + 1) % this.items.length);
  }

  prev(): void {
    this.index.update((i) => (i - 1 + this.items.length) % this.items.length);
  }
}
