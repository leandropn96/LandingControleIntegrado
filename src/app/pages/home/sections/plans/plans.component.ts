import { Component, inject } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { LandingDataService } from '../../../../core/services/landing-data.service';

@Component({
  selector: 'app-plans-section',
  imports: [TablerIconsModule],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss',
})
export class PlansSectionComponent {
  readonly plans = inject(LandingDataService).plans;
}
