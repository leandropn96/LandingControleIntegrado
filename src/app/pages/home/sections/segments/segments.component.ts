import { Component, inject } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { LandingDataService } from '../../../../core/services/landing-data.service';

@Component({
  selector: 'app-segments-section',
  imports: [TablerIconsModule],
  templateUrl: './segments.component.html',
  styleUrl: './segments.component.scss',
})
export class SegmentsSectionComponent {
  readonly items = inject(LandingDataService).segments;
}
