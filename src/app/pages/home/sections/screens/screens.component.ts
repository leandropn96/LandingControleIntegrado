import { Component, inject, signal } from '@angular/core';
import { LandingDataService } from '../../../../core/services/landing-data.service';

@Component({
  selector: 'app-screens-section',
  templateUrl: './screens.component.html',
  styleUrl: './screens.component.scss',
})
export class ScreensSectionComponent {
  readonly screens = inject(LandingDataService).screens;
  readonly active = signal(0);

  select(index: number): void {
    this.active.set(index);
  }

  next(): void {
    this.active.update((i) => (i + 1) % this.screens.length);
  }

  prev(): void {
    this.active.update((i) => (i - 1 + this.screens.length) % this.screens.length);
  }
}
