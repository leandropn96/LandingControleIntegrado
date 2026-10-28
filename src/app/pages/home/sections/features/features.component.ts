import { Component, inject } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { LandingDataService } from '../../../../core/services/landing-data.service';

@Component({
  selector: 'app-features-section',
  imports: [TablerIconsModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesSectionComponent {
  readonly categories = inject(LandingDataService).features;
}
