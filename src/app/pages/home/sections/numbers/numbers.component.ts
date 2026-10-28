import { Component, inject } from '@angular/core';
import { LandingDataService } from '../../../../core/services/landing-data.service';

@Component({
  selector: 'app-numbers-section',
  templateUrl: './numbers.component.html',
  styleUrl: './numbers.component.scss',
})
export class NumbersSectionComponent {
  readonly stats = inject(LandingDataService).stats;
}
